import Hole from '../../../../../../public/images/mobile-front-design/hole.png'
import InframeCamera from '../../../../../../public/images/mobile-front-design/inframe-camera.png'
import MediumNotch from '../../../../../../public/images/mobile-front-design/medium-notch.png'
import Retractable from '../../../../../../public/images/mobile-front-design/retractable-camera.png'
import Sliding from '../../../../../../public/images/mobile-front-design/sliding-camera.png'
import Waterdrop from '../../../../../../public/images/mobile-front-design/waterdrop-notch.png'
import WideNotch from '../../../../../../public/images/mobile-front-design/wide-notch.png'


export const hdrs = [
    { label: 'HDR', name: 'HDR', value: 'HDR' },
    { label: 'HDR10', name: 'HDR10', value: 'HDR10' },
    {
      label: 'HDR10+ / Dolby Vision',
      name: 'HDR10+ / Dolby Vision',
      value: 'HDR10+ / Dolby Vision',
    },
  ];

  export const rates = [
    { label: '90 Hz', name: '90 Hz', value: '90 Hz' },
    { label: '120 Hz', name: '120 Hz', value: '120 Hz' },
    {
      label: '144 Hz',
      name: '144 Hz',
      value: '144 Hz',
    },
    { label: '240 Hz', name: '240 Hz', value: '240 Hz' },
  ];

  export const resolutions = [
    { label: 'LowRes', name: 'LowRes', value: 'LowRes' },
    { label: 'HD', name: 'HD', value: 'HD' },
    { label: 'HD+', name: 'HD+', value: 'HD+' },
    { label: 'FHD', name: 'FHD', value: 'FHD' },
    { label: 'FHD+', name: 'FHD+', value: 'FHD+' },
    { label: 'QHD', name: 'QHD', value: 'QHD' },
    { label: 'QHD+', name: 'QHD+', value: 'QHD+' },
    { label: 'WQHD+', name: 'WQHD+', value: 'WQHD+' },
    { label: 'UHD', name: 'UHD', value: 'UHD' },
  ];

  export const screenTypes = [
    { label: 'LCD IPS', name: 'LCD IPS', value: 'LCD IPS' },
    { label: 'AMOLED', name: 'AMOLED', value: 'AMOLED' },
    { label: 'Super AMOLED', name: 'Super AMOLED', value: 'Super AMOLED' },
    { label: 'Oled', name: 'Oled', value: 'Oled' },
    { label: 'LCD', name: 'LCD', value: 'LCD' },
    { label: 'PLS', name: 'PLS', value: 'PLS' },
    { label: 'LTPS LCD', name: 'LTPS LCD', value: 'LTPS LCD' },
    { label: 'IGZO', name: 'IGZO', value: 'IGZO' },
    { label: 'pOLED', name: 'pOLED', value: 'pOLED' },
    { label: 'RGBW IPS', name: 'RGBW IPS', value: 'RGBW IPS' },
    { label: 'TFT LCD (IPS)', name: 'TFT LCD (IPS)', value: 'TFT LCD (IPS)' },
    { label: 'elnk', name: 'elnk', value: 'elnk' },
    { label: 'MiniLED IPS', name: 'MiniLED IPS', value: 'MiniLED IPS' },
  ];

  export const aspectsRatio= [
    { label: '4:3', name: '4:3', value: '4:3' },
    { label: '8:5', name: '8:5', value: '8:5' },
    { label: '16:9', name: '16:9', value: '16:9' },
    { label: '18:5:9', name: '18:5:9', value: '18:5:9' },
    { label: '19:5:9', name: '19:5:9', value: '19:5:9' },
    { label: '21:9', name: '21:9', value: '21:9' },
    { label: '3:2', name: '3:2', value: '3:2' },
    { label: '5:3', name: '5:3', value: '5:3' },
    { label: '18:9', name: '18:9', value: '18:9' },
    { label: '19:9', name: '19:9', value: '19:9' },
    { label: '20:9', name: '20:9', value: '20:9' },
  ];

  export const densities=[
    { label: 'Low', name: 'Low', value: 'Low' },
    { label: 'Normal', name: 'Normal', value: 'Normal' },
    { label: 'Medium', name: 'Medium', value: 'Medium' },
    { label: 'High', name: 'High', value: 'High' },
    { label: 'Very High', name: 'Very High', value: 'Very High' },

  ]

  export const curvedDisplayes=[
    { label: 'Curved display', name: 'Curved display', value: 'Curved display' },
    { label: 'No dual edge display', name: 'No dual edge display', value: 'No dual edge display' },
  ]

  export const weightSliders = [
    {
      label: 'Thickness',
      min: 4,
      max: 31,
      symbol: 'mm',
      defaultRange: [4,31],
      paramName: 'thickness',
      step: 1,
    },
    {
      label: 'Height',
      min: 90,
      max: 194,
      symbol: 'mm',
      defaultRange: [90,194],
      paramName: 'height',
      step:2 ,
    },
    {
      label: 'Width',
      min: 42,
      max: 114,
      symbol: 'mm',
      defaultRange: [42,114],
      paramName: 'width',
      step: 2,
    },
  ];

  export const notchFrames=[
    { label: 'Wide notch', name: 'Wide notch', value: 'Wide notch' , icon:WideNotch},
    { label: 'Medium-sized notch', name: 'Medium-sized notch', value: 'Medium-sized notch' , icon:MediumNotch},
    { label: 'Waterdrop notch', name: 'Waterdrop notch', value: 'Waterdrop notch' , icon:Waterdrop},
    { label: 'Hole', name: 'Hole', value: 'Hole' , icon:Hole},
    { label: 'Retractable camera', name: 'Retractable camera', value: 'Retractable camera' , icon:Retractable},
    { label: 'Sliding camera', name: 'Sliding camera', value: 'Sliding camera' , icon:Sliding},
    { label: 'In frame camera', name: 'In frame camera', value: 'In frame camera' , icon:InframeCamera},

  ]

  export const foldables=[{ label: 'Foldable', name: 'Foldable', value: 'Foldable'}]

  export const audios=[{ label: 'Stereo Speakers', name: 'Stereo Speakers', value: 'Stereo Speakers'}]