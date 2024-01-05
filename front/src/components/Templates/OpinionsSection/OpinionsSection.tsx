import OpinionsCarousel from '../../Organisms/OpinionsCarousel/OpinionsCarousel';
import './OpinionsSection.scss';
import purpleLeaf from '../../../assets/purple-leafs.png';

type OpinionsSectionProps = {};

const OpinionsSection = ({}: OpinionsSectionProps) => {
  return (
    <div id="opinionsSection">
      <div style={{ display: 'flex', position: 'relative' }}>
        <img src={purpleLeaf} alt="purple leafs as text decoration" />
        <h2 className="opinionsLeadText">
          They <span className="purpleWord">tested</span>. They{' '}
          <span className="purpleWord">challenged</span>.<br></br> And they{' '}
          <span className="purpleWord">liked</span> it!
        </h2>
      </div>

      <OpinionsCarousel />
    </div>
  );
};

export default OpinionsSection;
