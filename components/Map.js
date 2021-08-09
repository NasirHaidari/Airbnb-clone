import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'
import { useState } from 'react'
import Image from 'next/image'

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({})
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/nasir-dev/cks3vstss4ld117lfwwxk8giy'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}>
      {searchResults.map((result) => (
        <div className='' key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}>
            <p
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'>
              &#128151;
            </p>
          </Marker>

          {/* map popup  */}
          {selectedLocation.long == result.long ? (
            <Popup
              className='bg-transparent z-50'
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}>
              <div className='flex flex-col justify-between'>
                <div className='relative h-40  w-30 '>
                  <Image
                    className='rounded-lg'
                    src={result.img}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
                <div className='text-lg text-blue-800 mt-3'>{result.title}</div>
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
