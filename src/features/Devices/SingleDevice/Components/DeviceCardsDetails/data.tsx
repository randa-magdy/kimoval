import { OutlinePrint } from '@/components/Icons/OutlinePrint';
import Button from '@/components/UI/Button';
import ColorsBallsList from '@/components/UI/ColorsBallsList';
import GalleryInlineBlocksList, {
  GalleryInlineBlocksListProps,
} from '@/components/UI/GalleryInlineBlocksList';
import Col from '@/components/UI/ResponsiveFlex/Col';
import Row from '@/components/UI/ResponsiveFlex/Row';
import Space from '@/components/UI/Space';
import BandsInfoList from './CardDetails/BandsInfoList';
import DevicesImgeName from './CardDetails/DevicesImgeName';
import PricesList from './CardDetails/PricesList';
import RowInfo from './CardDetails/RowInfo';

export const TechnicalSheetData = [
  {
    subTitle: 'Description',
    details: (
      <p>
        Introducing the Xiaomi 14 Pro – a High-end Smartphone from Xiaomi The
        Xiaomi 14 Pro is a high-end smartphone from Xiaomi and the latest
        addition to the Xiaomi 14 series.
        <br /> This device was released in October of 2023 and features an
        impressive set of specifications and features that make it ideal for
        those who want a powerful and capable smartphone. Design & Materials The
        Xiaomi 14 Pro has a sleek and stylish design, with a 6.73-inch AMOLED
        display that offers a resolution of 1440 x 3220 (WQHD+), a refresh rate
        of 120 Hz, and a peak brightness of 3000 cd/m².
        <br /> Its display also features dual Edge technology and HDR10+
        support.
        <br /> It is also made of aluminium alloy, glass and titanium that gives
        it an elegant look and feel.
        <br /> The usable surface of the device is 88.9%, which allows for easy
        navigation and access to all its features. Additionally, there is also a
        Titanium Edition available, which weighs 230g.
      </p>
    ),
  },
  {
    subTitle: 'Brand',
    detailRows: [
      { detail: <RowInfo label="Brand" description="Xiaomi" /> },
      {
        detail: <RowInfo label="Aliases" description="mi 14, xiaomi mi 14" />,
      },
      {
        detail: (
          <RowInfo
            label="Brand"
            isLast={true}
            description={
              <DevicesImgeName
                devices={[
                  {
                    img: '/images/small-phone.jpg',
                    name: 'Xiaomi Redmi Note 13 Pro 5G ',
                  },
                  {
                    img: '/images/small-phone.jpg',
                    name: 'Xiaomi 13T ',
                  },
                  {
                    img: '/images/small-phone.jpg',
                    name: 'Xiaomi 14 ',
                  },
                  {
                    img: '/images/small-phone.jpg',
                    name: 'Xiaomi 13T Pro ',
                  },
                  {
                    img: '/images/small-phone.jpg',
                    name: 'Xiaomi Redmi Note 13 Pro + ',
                  },
                ]}
              />
            }
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Xiaomi 14 Versions and Prices',
    detailRows: [
      {
        detail: (
          <RowInfo
            // label="Versions and Prices"
            isLast={true}
            description={
              <PricesList
                name="Xiaomi 14"
                pricesData={[
                  { details: 'China · 8GB · 256GB', price: 637, slug: '' },
                  { details: 'China · 12GB · 256GB', price: 738, slug: '' },
                  { details: 'China · 16GB · 512GB', price: 803, slug: '' },
                  { details: 'China · 12GB · 512GB', price: null, slug: '' },
                  { details: 'China · 16GB · 1TB', price: 830, slug: '' },
                  { details: 'Global · 12GB · 256GB', price: null, slug: '' },
                  { details: 'Global · 12GB · 512GB', price: null, slug: '' },
                ]}
              />
            }
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Release Date',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Release date"
            isLast={true}
            description="October 2023, 4 months ago"
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Related',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Release date"
            description={
              <DevicesImgeName
                devices={[
                  {
                    img: '/images/small-phone.jpg',
                    name: 'Xiaomi 13',
                  },
                ]}
              />
            }
          />
        ),
      },
      {
        detail: (
          <RowInfo
            label="Similar name"
            isLast={true}
            description={
              <DevicesImgeName
                devices={[
                  {
                    img: '/images/small-phone.jpg',
                    name: 'Xiaomi 14 Pro',
                  },
                  {
                    img: '/images/small-phone.jpg',
                    name: 'Xiaomi 14 Ultra',
                  },
                ]}
              />
            }
          />
        ),
      },
    ],
  },
];

/* Design & Materials Data */
const thumbnails: GalleryInlineBlocksListProps['thumbnails'] = [
  {
    id: 1,
    thumbnail: '/images/single-device/thumbnails/default.jpg',
  },
  {
    id: 2,
    thumbnail:
      '/images/single-device/thumbnails/thumb_837242_default_x_small.webp',
  },
  {
    id: 3,
    thumbnail:
      '/images/single-device/thumbnails/thumb_837243_default_x_small.webp',
  },
  {
    id: 4,
    thumbnail:
      '/images/single-device/thumbnails/thumb_837626_default_x_small.webp',
  },
  {
    id: 5,
    thumbnail:
      '/images/single-device/thumbnails/thumb_837627_default_x_small.webp',
  },

  {
    id: 6,
    thumbnail:
      '/images/single-device/thumbnails/thumb_837628_default_x_small.webp',
  },
  {
    id: 7,
    thumbnail:
      '/images/single-device/thumbnails/thumb_837629_default_x_small.webp',
  },
];

const gallery: GalleryInlineBlocksListProps['gallery'] = [
  {
    id: 1,
    type: 'video',
    video: 'https://www.youtube.com/embed/qJxPkYgBzpI?si=3s1ygjOq1Ko5Utgs',
    thumbnail: '/images/single-device/gallery/default-thumbnail.jpg',
  },
  {
    id: 2,
    type: 'image',
    image: '/images/single-device/gallery/thumb_837242_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837242_default_big.webp',
  },
  {
    id: 3,
    type: 'image',
    image: '/images/single-device/gallery/thumb_837243_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837243_default_big.webp',
  },
  {
    id: 4,
    type: 'image',
    image: '/images/single-device/gallery/thumb_837626_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837626_default_big.webp',
  },
  {
    id: 5,
    type: 'image',
    image: '/images/single-device/gallery/thumb_837627_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837627_default_big.webp',
  },

  {
    id: 6,
    type: 'image',
    image: '/images/single-device/gallery/thumb_837628_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837628_default_big.webp',
  },
  {
    id: 7,
    type: 'image',
    image: '/images/single-device/gallery/thumb_837629_default_big.webp',
    thumbnail: '/images/single-device/gallery/thumb_837629_default_big.webp',
  },
];

const others = [
  'Hole-punch Notch',
  '1-120 Hz refresh rate',
  'Refresh rate 120 Hz',
  'Touch sampling rate 240 Hz',
  'Peak brightness - 3000 cd/m²',
  'TÜV Rheinland Eye Comfort Certification',
  'HDR10+',
  'DCI-P3',
  'DC dimming',
  '12 Bits panel',
  'Dolby Vision',
  'Scratch resistant',
  'Corning Gorilla Glass Victus',
  'Capacitive',
  'Multi-touch',
  'Frameless',
  'LTPO (Low Temperature PolySilicon oxide)',
];

export const DesignMaterialsData = [
  {
    subTitle: 'Image gallery',
    detailRows: [
      {
        detail: (
          <RowInfo
            // label="Image gallery"
            isLast={true}
            description={
              <GalleryInlineBlocksList
                thumbnails={thumbnails}
                gallery={gallery}
              />
            }
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Structure',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Size"
            description={
              <div className="flex flex-wrap items-center">
                <span className="me-4">71.5 mm • 152.8 mm • 8.3 mm</span>
                <Button
                  className="bg-dark-gray-white rounded-xl hover:border-dashed hover:border-gray-400 transition duration-300 ease-in"
                  size="small"
                >
                  <a
                    href="https://www.kimovil.com/en/real-dimensions/xiaomi-14.pdf"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <Space>
                      <OutlinePrint fontSize={20} className="text-dark-gray" />
                      <span>Print 3D Model</span>
                    </Space>
                  </a>
                </Button>
              </div>
            }
          />
        ),
      },
      {
        detail: <RowInfo label="Weight" description="193 g" />,
      },
      {
        detail: <RowInfo label="Usable surface" description="	89 %" />,
      },
      {
        detail: (
          <RowInfo label="Materials" description="Aluminium alloy , Glass" />
        ),
      },
      {
        detail: (
          <RowInfo
            label="Resistance certificates (dust, water)"
            description="IP68"
          />
        ),
      },
      {
        detail: (
          <RowInfo
            label="Colors"
            description={
              <ColorsBallsList
                colors={[
                  { color: '#ccc', name: 'Silver' },
                  { color: '#f2d339', name: 'Yellow' },
                  { color: '#202bb5', name: 'Blue' },
                  { color: '#000', name: 'Black' },
                ]}
              />
            }
            isLast={true}
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Screen',
    detailRows: [
      {
        detail: <RowInfo label="Diagonal" description='6.36"' />,
      },
      {
        detail: <RowInfo label="Type" description="AMOLED" />,
      },
      {
        detail: <RowInfo label="Aspect Ratio" description="20:9" />,
      },
      {
        detail: (
          <RowInfo label="Resolution" description="	1200 x 2670 px • QHD" />
        ),
      },
      {
        detail: (
          <RowInfo label="Density" description="460 ppi • Very high density" />
        ),
      },
      {
        detail: (
          <RowInfo
            label="Others"
            isLast={true}
            description={
              <ul className="list-disc">
                {others.map((val, idx) => (
                  <li key={idx}>{val}</li>
                ))}
              </ul>
            }
          />
        ),
      },
    ],
  },
];

/* Performance & Hardware Data*/
const audios = [
  'Dolby Atmos',
  'Hi-Res Audio',
  'Stereo Speakers',
  '4 microphones',
];
export const PerformanceHardwareData = [
  {
    subTitle: 'Processor',
    detailRows: [
      {
        detail: (
          <RowInfo label="Model" description="Qualcomm Snapdragon 8 Gen3" />
        ),
      },
      {
        detail: (
          <RowInfo
            label="CPU"
            description="1x3.3GHz Cortex • X4 + 3x3.2 GHz Cortex•A720 + 2x3.0 GHz Cortex • A720 + 2x2.3 GHz Cortex • A520"
          />
        ),
      },
      {
        detail: <RowInfo label="Type" description="Octa-Core" />,
      },
      {
        detail: <RowInfo label="Nanometer" description="4 nm" />,
      },
      {
        detail: <RowInfo label="Frequency" description="3.3 GHz" />,
      },
      {
        detail: <RowInfo label="64 Bits" description="Yes" isLast={true} />,
      },
    ],
  },
  {
    subTitle: 'Graphics',
    detailRows: [
      {
        detail: <RowInfo label="GPU" description="Adreno 750" isLast={true} />,
      },
    ],
  },
  {
    subTitle: 'RAM',
    detailRows: [
      {
        detail: <RowInfo label="RAM" description="12 GB" />,
      },
      {
        detail: (
          <RowInfo label="Type" description="RAM LPDDR5X" isLast={true} />
        ),
      },
    ],
  },
  {
    subTitle: 'Antutu',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Score"
            isLast={true}
            description={
              <div>
                <div className="flex">
                  <span>1.985.014</span>
                  <span className="text-light-gray font-semibold">
                    • Antutu v10
                  </span>
                </div>
                <span className="text-light-gray">
                  Overall performance better than 99% of devices
                </span>
              </div>
            }
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Storage',
    detailRows: [
      {
        detail: <RowInfo label="Capacity" description="256 GB" />,
      },
      {
        detail: <RowInfo label="Type" description="UFS Storage 4.0" />,
      },
      {
        detail: <RowInfo label="SD Slot" description="No" isLast={true} />,
      },
    ],
  },
  {
    subTitle: 'Security',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Fingerprint"
            description="Yes, in screen"
            isLast={true}
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Sensors',
    detailRows: [
      {
        detail: <RowInfo label="Fingerprint" description="Yes" />,
      },
      {
        detail: <RowInfo label="Proximity" description="Yes" />,
      },
      {
        detail: <RowInfo label="Light sensor" description="Yes" />,
      },
      {
        detail: <RowInfo label="Accelerometer" description="Yes" />,
      },
      {
        detail: <RowInfo label="Compass" description="Yes" />,
      },
      {
        detail: <RowInfo label="Gyroscope" description="Yes" />,
      },
      {
        detail: <RowInfo label="Barometer" description="Yes" />,
      },
      {
        detail: <RowInfo label="RGB" description="Yes" />,
      },
      {
        detail: (
          <RowInfo
            label="Color temperature sensors"
            description="Yes"
            isLast={true}
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Audio',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Audio"
            isLast={true}
            description={
              <ul className="list-disc">
                {audios.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            }
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Others',
    detailRows: [
      {
        detail: <RowInfo label="Notifications LED" description="--" />,
      },
      {
        detail: <RowInfo label="Cooling system" description="Yes" />,
      },
      {
        detail: (
          <RowInfo label="Gaming buttons" description="No" isLast={true} />
        ),
      },
    ],
  },
];

/* Camera Data */
const cameraFirstFeatures = [
  'Flicker sensor',
  'Noise reduction',
  '4K Video',
  '8K Video',
  'Digital zoom',
  'Optical zoom',
  'Triple camera',
  'Digital image stabilization',
  'Optical Stabilization (OIS)',
  'Ultra stable video',
  'Autofocus',
  'Touch focus',
  'Continuous autofocus',
  'Manual focus',
];
const cameraSecondFeatures = [
  'Phase detection autofocus (PDAF)',
  'Continuous shooting',
  'Geotagging',
  'Panorama',
  'HDR',
  'Face detection',
  'White balance settings',
  'ISO settings',
  'Exposure compensation',
  'Scene mode',
  'Self-timer',
  'Night Mode',
  'RAW 14 bits',
];

const othersExtra = [
  '7P',
  'Telephoto lens with OIS',
  '115° ultra-wide viewing angle 6P lens',
  'Leica ultra-dynamic main camera',
  '4K video capture: 24/30/60fps',
  '32 million pixels (photo mode) for Thelephoto sensor.',
  '50 million pixels (portrait mode) for Thelephoto sensor.',
];

export const CameraData = [
  {
    subTitle: 'Triple rear camera',
    cardsDetailRows: [
      {
        label: 'Standard',
        detailRows: [
          { detail: <RowInfo label="Resolution" description="	50 Mpx" /> },
          { detail: <RowInfo label="Sensor" description="Omnivision OV50H" /> },
          { detail: <RowInfo label="Type" description="CMOS" /> },
          { detail: <RowInfo label="Aperture" description="ƒ/ 1.6" /> },
          { detail: <RowInfo label="Pixel size" description="1.20 µm" /> },
          { detail: <RowInfo label="Pixel Binning" description="1-4 (2x2)" /> },
          {
            detail: (
              <RowInfo label="Sensor size" description='1/1.3"' isLast={true} />
            ),
          },
        ],
      },
      {
        label: 'Wide Angle lens',
        detailRows: [
          { detail: <RowInfo label="Resolution" description="	50 Mpx" /> },
          { detail: <RowInfo label="Sensor" description="Samsung S5KJN1" /> },
          { detail: <RowInfo label="Type" description="ISOCELL" /> },
          { detail: <RowInfo label="Aperture" description="ƒ/ 2.2" /> },
          { detail: <RowInfo label="Pixel size" description="1.12 µm" /> },
          { detail: <RowInfo label="Pixel Binning" description="1-4 (2x2)" /> },
          {
            detail: (
              <RowInfo
                label="Sensor size"
                description='1/2.76"'
                isLast={true}
              />
            ),
          },
        ],
      },
      {
        label: 'Telephoto + portrait',
        detailRows: [
          { detail: <RowInfo label="Resolution" description="50 Mpx" /> },
          { detail: <RowInfo label="Sensor" description="Samsung S5KJN1" /> },
          { detail: <RowInfo label="Type" description="Samsung S5KJN1" /> },
          { detail: <RowInfo label="Aperture" description="	ƒ/ 2.0" /> },
          { detail: <RowInfo label="Pixel size" description="0.64 µm" /> },
          { detail: <RowInfo label="Pixel Binning" description="1-4 (2x2)" /> },
          {
            detail: (
              <RowInfo
                label="Sensor size"
                description='1/2.76"'
                isLast={true}
              />
            ),
          },
        ],
      },
    ],
    detailRows: [
      { detail: <RowInfo label="Flash" description="LED" /> },
      { detail: <RowInfo label="Optical Stabilisation" description="Yes" /> },
      {
        detail: (
          <RowInfo label="Slow Motion Video" description="Yes, 1920 fps" />
        ),
      },
      {
        detail: (
          <RowInfo
            label="Features"
            description={
              <Row justify="between">
                <Col xs="w-full" md="md:w-6/12">
                  <ul className="list-disc">
                    {cameraFirstFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </Col>
                <Col xs="w-full" md="md:w-6/12">
                  <ul className="list-disc">
                    {cameraSecondFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </Col>
              </Row>
            }
            isLast={true}
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Selfie',
    cardsDetailRows: [
      {
        detailRows: [
          { detail: <RowInfo label="Resolution" description="	32 Mpx" /> },
          { detail: <RowInfo label="Sensor" description="Omnivision OV32B" /> },
          { detail: <RowInfo label="Type" description="CMOS" /> },
          { detail: <RowInfo label="Aperture" description="Unknow" /> },
          { detail: <RowInfo label="Pixel size" description="0.70 µm" /> },
          { detail: <RowInfo label="Pixel Binning" description="1-4 (2x2)" /> },
          {
            detail: (
              <RowInfo label="Sensor size" description='1/3"' isLast={true} />
            ),
          },
        ],
      },
    ],
  },
  {
    subTitle: 'Others',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Extra"
            isLast={true}
            description={
              <ul className="list-disc">
                {othersExtra.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            }
          />
        ),
      },
    ],
  },
];

/* Connectivity Data */
const bands = [
  {
    network_name: '5G',
    info: [
      { nr: 'n1', name: '2100' },
      { nr: 'n2', name: '1900 PCS' },
      { nr: 'n3', name: '1800' },
      { nr: 'n5', name: '850' },
      { nr: 'n8', name: '900' },
      { nr: 'n20', name: '800' },
      { nr: 'n25', name: '1900' },
      { nr: 'n28b', name: '700' },
      { nr: 'n28a', name: '700' },
      { nr: 'n38', name: '2600' },
      { nr: 'n40', name: '2300' },
      { nr: 'n41', name: '2500' },
      { nr: 'n48', name: '3500' },
      { nr: 'n66', name: '1700' },
      { nr: 'n75', name: '1500' },
      { nr: 'n77', name: '3700' },
      { nr: 'n78', name: '3500' },
    ],
  },
  {
    network_name: '4G LTE',
    info: [
      { nr: 'B1', name: '2100' },
      { nr: 'B2', name: '1900' },
      { nr: 'B3', name: '1800' },
      { nr: 'B4', name: '1700/2100 AWS 1' },
      { nr: 'B5', name: '850' },
      { nr: 'B7', name: '2600' },
      { nr: 'B8', name: '900' },
      { nr: 'B12', name: '700' },
      { nr: 'B13', name: '700' },
      { nr: 'B17', name: '700' },
    ],
  },
  {
    network_name: '3G',
    info: [
      { nr: 'B1', name: '2100' },
      { nr: 'B2', name: '1900' },
      { nr: 'B4', name: '1700/2100 AWS 1' },
      { nr: 'B5', name: '850' },
      { nr: 'B7', name: '2600' },
      { nr: 'B8', name: '900' },
    ],
  },
  {
    network_name: '2G',
    info: [
      { nr: 'B5', name: '850' },
      { nr: 'B7', name: '2600' },
      { nr: 'B8', name: '900' },
    ],
  },
];

const bluetoothProfilesData = [
  'A2DP (Advanced Audio Distribution Profile)',
  'LE (Low Energy)',
  'APT-x',
  'LDAC',
  'SBC',
  'AAC',
];
export const ConnectivityData = [
  {
    subTitle: 'Bands',
    detailRows: [
      {
        detail: (
          <RowInfo
            label={bands[0].network_name}
            description={<BandsInfoList bands={bands[0].info} />}
          />
        ),
      },
      {
        detail: (
          <RowInfo
            label={bands[1].network_name}
            description={<BandsInfoList bands={bands[1].info} />}
          />
        ),
      },
      {
        detail: (
          <RowInfo
            label={bands[2].network_name}
            description={<BandsInfoList bands={bands[2].info} />}
          />
        ),
      },
      {
        detail: (
          <RowInfo
            label={bands[3].network_name}
            description={<BandsInfoList bands={bands[3].info} />}
            isLast={true}
          />
        ),
      },
    ],
  },

  {
    subTitle: 'SIM card',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Type"
            description={
              <Space direction="vertical">
                <span> Dual SIM Dual Standby (Nano SIM + Nano SIM)</span>
                <span className="text-small">
                  SIM cards (MiniSIM) can be cut to MicroSIM, MicroSIM can be
                  cut to NanoSIM and a SIM can even be cut to a NanoSIM
                  (although not recommended). Download this SIM Cutting Template
                  and forget about having to ask your operator for a new SIM...
                </span>
              </Space>
            }
            isLast={true}
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Wi-Fi',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Standards"
            description="802.11a , 802.11b , 802.11g , 802.11n , 802.11n 5GHz , 802.11ac, WiFi 6 (802.11ax) , Wi-Fi 7 (802.11be)"
            isLast={true}
          />
        ),
      },
      {
        detail: (
          <RowInfo
            label="Others"
            description={
              <ul className="list-disc">
                <li>Dual band</li>
                <li>Wi-Fi Hotspot</li>
                <li>Wi-Fi Direct</li>
                <li>Wi-Fi Display</li>
                <li>Wi-Fi MiMO</li>
              </ul>
            }
            isLast={true}
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Bluetooth',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Version"
            description="Bluetooth 5.4 LELow energy consumption"
          />
        ),
      },
      {
        detail: (
          <RowInfo
            label="Profiles"
            description={
              <ul className="list-disc">
                {bluetoothProfilesData.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            }
            isLast={true}
          />
        ),
      },
    ],
  },
  {
    subTitle: 'Navigation',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Supports"
            description="A-GPS, GLONASS, Beidou, Galileo, GPS (L1+L5), GLONASS (L1), BeiDou (B1), Galileo (E1+E5a), BeiDou (B2), NavIC System"
            isLast={true}
          />
        ),
      },
    ],
  },
  {
    subTitle: 'USB',
    detailRows: [
      {
        detail: <RowInfo label="Charging" description="Yes" />,
      },
      {
        detail: <RowInfo label="Mass Storage" description="Yes" />,
      },
      {
        detail: <RowInfo label="USB On-The-Go (OTG)" description="Yes" />,
      },
      {
        detail: <RowInfo label="USB Type C" description="Yes" />,
      },
      {
        detail: (
          <RowInfo label="USB Host 3.2" description="Yes" isLast={true} />
        ),
      },
    ],
  },
  {
    subTitle: 'Others',
    detailRows: [
      {
        detail: <RowInfo label="NFC" description="Yes" />,
      },
      {
        detail: <RowInfo label="Audio Jack" description="No" />,
      },
      {
        detail: <RowInfo label="Radio FM" description="No" />,
      },
      {
        detail: <RowInfo label="Computer sync" description="Yes" />,
      },
      {
        detail: <RowInfo label="OTA sync" description="Yes" />,
      },
      {
        detail: <RowInfo label="Infrared" description="Yes" />,
      },
      {
        detail: <RowInfo label="Tethering" description="Yes" />,
      },
      {
        detail: <RowInfo label="DLNA" description="Yes" />,
      },
      {
        detail: <RowInfo label="VoLTE" description="Yes" isLast={true} />,
      },
    ],
  },
];

/* Battery Data */
export const BatteryData = [
  {
    subTitle: 'Battery',
    detailRows: [
      { detail: <RowInfo label="Capacity" description="4610 mAh" /> },
      { detail: <RowInfo label="Type" description="	Li-Ion" /> },
      { detail: <RowInfo label="Fast charge" description="Yes , 90.0W" /> },
      {
        detail: (
          <RowInfo
            label="Others"
            description={
              <ul className="list-disc">
                <li>Wireless charging</li>
                <li>Reverse charging </li>
                <li>Non-removable</li>
              </ul>
            }
          />
        ),
      },
      {
        detail: (
          <RowInfo
            label="Extra"
            description={
              <ul className="list-disc">
                <li>50W wireless charging</li>
                <li>10W reverse wireless charging</li>
                <li>Pengpai G1 battery management chip</li>
                <li>Pengpai P2 charging chip</li>
              </ul>
            }
            isLast={true}
          />
        ),
      },
    ],
  },
];

/* Software Data */
export const SoftwareData = [
  {
    subTitle: 'Software',
    detailRows: [
      {
        detail: (
          <RowInfo
            label="Operating System"
            description={
              <div>
                <span className="block">Android 14 Upside-down cake</span>
                <span className="text-light-gray block">
                  HyperOS (Android 14)
                </span>
              </div>
            }
          />
        ),
      },
      {
        detail: (
          <RowInfo label="Google Services (official)" description="Yes" />
        ),
      },
    ],
  },
];
