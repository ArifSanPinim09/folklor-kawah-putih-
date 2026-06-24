"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { MAP_MARKERS } from "@/lib/constants";

interface MarkerInfo {
  id: string;
  name: string;
  description: string;
  position: { lat: number; lng: number };
}

export default function MapSection() {
  const [selectedMarker, setSelectedMarker] = useState<MarkerInfo | null>(null);

  return (
    <section className="bg-kabut-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-caption font-medium uppercase tracking-widest text-danau-500">
            Peta Lokasi
          </p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-arang-900 sm:text-3xl">
            Jelajahi Kawasan Kawah Putih
          </h2>
          <p className="mt-4 text-body-lg text-kabut-abu">
            Tiga lokasi penting di kawasan Gunung Patuha yang wajib dikunjungi.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="relative mt-8 overflow-hidden rounded-md sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Google Maps Embed */}
          <div className="relative aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d107.4024!3d-7.1661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDknNTguMCJTIDEwN8KwMjQnMDkuNiJF!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Kawah Putih"
              className="absolute inset-0"
            />

            {/* Custom Markers Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {MAP_MARKERS.map((marker, index) => (
                <button
                  key={marker.id}
                  className="pointer-events-auto absolute"
                  style={{
                    left: `${20 + index * 30}%`,
                    top: `${40 + (index % 2) * 20}%`,
                  }}
                  onClick={() => setSelectedMarker(marker)}
                  aria-label={`Lihat info ${marker.name}`}
                >
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-danau-500 text-kabut-50 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    <MapPin className="h-5 w-5" />
                  </motion.div>
                </button>
              ))}
            </div>
          </div>

          {/* Info Card */}
          {selectedMarker && (
            <motion.div
              className="absolute bottom-4 left-4 right-4 rounded-md border border-kabut-100 bg-kabut-50 p-4 shadow-lg sm:left-auto sm:right-4 sm:max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-danau-500" />
                    <h3 className="font-serif text-lg font-semibold text-arang-900">
                      {selectedMarker.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-body text-kabut-abu">
                    {selectedMarker.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMarker(null)}
                  className="rounded-full p-1 text-kabut-abu transition-colors duration-200 hover:bg-kabut-100 hover:text-arang-900"
                  aria-label="Tutup info"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Markers List */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {MAP_MARKERS.map((marker, index) => (
            <motion.button
              key={marker.id}
              className="flex items-start gap-3 rounded-md border border-kabut-100 bg-kabut-50 p-4 text-left transition-all duration-200 hover:border-danau-500/20 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMarker(marker)}
            >
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-danau-500" />
              <div>
                <h3 className="font-serif text-base font-semibold text-arang-900">
                  {marker.name}
                </h3>
                <p className="mt-1 text-caption text-kabut-abu">
                  {marker.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
