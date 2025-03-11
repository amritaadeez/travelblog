'use client';

import { useEffect, useRef } from 'react';

interface Location {
  name: string;
  lat: number;
  lng: number;
}

interface MapProps {
  locations: Location[];
}

export default function Map({ locations }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current) return;

    // Center the map on the first location
    const center = locations[0] ? 
      { lat: locations[0].lat, lng: locations[0].lng } : 
      { lat: 26.9124, lng: 75.7873 }; // Default to Jaipur

    const map = new google.maps.Map(mapRef.current, {
      zoom: 12,
      center,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    });

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Add markers for each location
    locations.forEach(location => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: location.name,
        animation: google.maps.Animation.DROP
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `<div class="p-2">
          <h3 class="font-semibold">${location.name}</h3>
        </div>`
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      markersRef.current.push(marker);
    });

    // Fit bounds to show all markers
    if (locations.length > 1) {
      const bounds = new google.maps.LatLngBounds();
      locations.forEach(location => {
        bounds.extend({ lat: location.lat, lng: location.lng });
      });
      map.fitBounds(bounds);
    }
  }, [locations]);

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
}