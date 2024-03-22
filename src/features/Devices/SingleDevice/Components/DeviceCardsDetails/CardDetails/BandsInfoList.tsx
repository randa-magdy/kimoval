import { FC } from 'react';

type Bands = { nr: string; name: string }[];
const BandsInfoList: FC<{ bands: Bands }> = ({ bands }) => {
  const infolist = bands.map((band, idx) => (
    <span key={idx}>
      {band.nr}
      <span className="text-light-gray px-1">({band.name}),</span>
    </span>
  ));
  return <div className="bands-info-list flex flex-wrap">{infolist}</div>;
};

export default BandsInfoList;
