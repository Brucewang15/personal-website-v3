"use client"

import { FaLocationArrow } from "react-icons/fa"
import dynamic from "next/dynamic"
import { BentoGridItem } from "./effects/BentoGrid"

const World = dynamic(() => import("./effects/globe").then((mod) => mod.World), { ssr: false })

const globeConfig = {
  globeColor: "#121212",
  pointLight: "#ffffff",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  showAtmosphere: true,
  atmosphereColor: "#FFFFFF",
  atmosphereAltitude: 0.1,
  emissive: "#000000",
  emissiveIntensity: 0.0,
  shininess: 0.3,
  autoRotate: true,
  autoRotateSpeed: 0.1,
  initialPosition: {
    lat: 37.7749,
    lng: -122.4194,
  },
}

const globeData = [
  {
    order: 1,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0,
    color: "#ffffff",
  },
]

export default function LocationBox() {
  return (
    <BentoGridItem
      className="col-span-6 overflow-hidden"
      height="h-[18rem]"
      width="col-span-6"
      title="San Francisco, CA"
      description={
        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center">
            <div className="h-[28rem] w-[28rem] -translate-y-8">
              <World globeConfig={globeConfig} data={globeData} />
            </div>
          </div>
        </div>
      }
      icon={<FaLocationArrow className="h-4 w-4" />}
    />
  )
}
