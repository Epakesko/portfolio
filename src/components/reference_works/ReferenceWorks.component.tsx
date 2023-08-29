import "./ReferenceWorks.styles.scss";
import NNImage from "../../media/other-work/nn.png";
import RaiffeisenImage from "../../media/other-work/raiffeisen.png";
import RedSeaImage from "../../media/other-work/red-sea.png";
import MateImage from "../../media/other-work/mate.png";
import RSPCAImage from "../../media/other-work/rspca.png";
import TelecomImage from "../../media/other-work/telecom.png";
import { ConditionalWrapper } from "../common/ConditionalWrapper.component";
import { ReactNode } from "react";

type ReferenceWorkProps = {
  image: string;
  name: string;
  description: string;
  technologies: string;
  url?: string;
};

const ReferenceWork = ({ image, name, description, technologies, url }: ReferenceWorkProps) => {
  return (
    <div className="reference-work">
      <ConditionalWrapper
        condition={!!url}
        wrapper={(children: ReactNode) => (
          <a className="reference-link" href={url}>
            {children}
          </a>
        )}
      >
        <img alt="background" src={image} />
        <div className="overlay">
          <span className="name">{name}</span>
          <div>
            <div className="description">{description}</div>
            <div className="technologies">{technologies}</div>
          </div>
        </div>
      </ConditionalWrapper>
    </div>
  );
};

const ReferenceWorks = () => {
  return (
    <div className="reference-works">
      <ReferenceWork
        url="https://www.redseaglobal.com/en/home"
        image={RedSeaImage}
        name="Red Sea Global"
        description="Webtown's first project with Saudi partners. Front-end heavy solutions for the best user experience."
        technologies="JavaScript, FreeMarker, CSS"
      />
      {/* Hello World 
      <ReferenceWork
        image={RSPCAImage}
        name="Royal Society for the Prevention of Cruelty to Animals"
        description="Intranet project that mainly consisted of making Liferay's out-of-the-box functionalities more accessible to the internal users."
        technologies="Java, JavaScript, CSS"
      />
      */}
      <ReferenceWork
        url="https://raiffeisen.hu"
        image={RaiffeisenImage}
        name="Raiffeisen Bank - Upgrade"
        description="An upgrade project that brought the portal from a legacy Liferay version to one of the newest releases."
        technologies="Java"
      />
      <ReferenceWork
        url="https://uni-mate.hu"
        image={MateImage}
        name="MATE University"
        description="Greenfield project for one of the biggest Hungarian universities."
        technologies="Java, JavaScript, FreeMarker, CSS"
      />
      <ReferenceWork
        url="https://nn.hu"
        image={NNImage}
        name="NN Group"
        description="Several smaller projects for the Hungarian site of the NN Group."
        technologies="Java"
      />
      {/* Hello World 
        <ReferenceWork
          image={NNImage}
          name="Education website"
          description="An interactive website with lessons and activities that educators can play to their students."
          technologies="React, Java"
        />
      */}

      <ReferenceWork
        image={TelecomImage}
        name="Telecommunications company"
        description="Portal redesign for an Austrian company, involving several challenging back-end and front-end tasks."
        technologies="Java, JavaScript, React, ElasticSearch"
      />
    </div>
  );
};

export default ReferenceWorks;
