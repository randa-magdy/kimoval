import { CSSProperties, FC, ReactNode } from 'react';
import SectionTitle, { SectionTitleProps } from '../SectionTitle';

export interface NormalSectionProps extends SectionTitleProps {
  sectionClassName?: string;
  children: ReactNode;
  sectionStyle?: CSSProperties;
}
const NormalSection: FC<NormalSectionProps> = ({
  sectionClassName,
  sectionStyle,
  children,
  title,
  ...restProps
}) => {
  return (
    <section className={sectionClassName} style={sectionStyle}>
      <SectionTitle title={title} {...restProps} />
      {children}
    </section>
  );
};

export default NormalSection;
