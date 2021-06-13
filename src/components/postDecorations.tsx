import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faCircle,
  faLightbulb,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";

/* Post Decoration Components */

/*
 * Heading (for h1,h2,h3)
 */
export const H1: React.FC = ({ ...props }) => {
  return (
    <h1 className="text-2xl sm:text-3xl font-bold">
      <FontAwesomeIcon className="mr-2 text-blue-700 " icon={faCheckSquare} />
      {props.children}
    </h1>
  );
};

export const H2: React.FC = ({ ...props }) => {
  return (
    <h2 className="text-xl sm:text-2xl font-semibold">
      <FontAwesomeIcon className="mr-2 text-blue-700" icon={faSquare} />
      {props.children}
    </h2>
  );
};

export const H3: React.FC = ({ ...props }) => {
  return (
    <h3 className="text-lg sm:text-xl font-semibold">
      <FontAwesomeIcon className="mr-2 text-blue-700" icon={faCircle} />
      {props.children}
    </h3>
  );
};

export const H4: React.FC = ({ ...props }) => {
  return (
    <h4 className="text-base sm:text-lg font-semibold">{props.children}</h4>
  );
};

export const H5: React.FC = ({ ...props }) => {
  return (
    <h5 className="text-sm sm:text-base font-semibold">{props.children}</h5>
  );
};

export const H6: React.FC = ({ ...props }) => {
  return <h6 className="text-xs sm:text-sm font-bold">{props.children}</h6>;
};

/*
 *  Paragraph
 */
export const P: React.FC = ({ ...props }) => {
  return <p className="text-sm sm:text-base font-light">{props.children}</p>;
};

/*
 *  List (UnOrdered List, Ordered List)
 */
export const UL: React.FC = ({ ...props }) => {
  return <ul className="list-disc my-3 ml-8">{props.children}</ul>;
};

export const OL: React.FC = ({ ...props }) => {
  return <ol className="list-decimal my-3 ml-8">{props.children}</ol>;
};

/*
 * Point
 */
export const Point: React.FC = ({ ...props }) => {
  return (
    <div className="bg-green-200 rounded-lg relative mt-6 mb-2">
      <span className="absolute left-2.5 -top-4 bg-green-600 rounded-full h-8 w-8 flex items-center justify-center">
        <FontAwesomeIcon className="text-white text-lg" icon={faLightbulb} />
      </span>
      <span className="absolute left-8 -top-3 bg-green-600 text-white rounded-lg font-black px-2">
        POINT
      </span>
      <div className="pt-6 px-5 pb-5">{props.children}</div>
    </div>
  );
};

/*
 * Attention
 */
export const Attention: React.FC = ({ ...props }) => {
  return (
    <div className="bg-red-200 rounded-lg border-red-700 border-2 border-dashed relative mt-6 mb-2">
      <span className="absolute left-2.5 -top-4 bg-red-600 rounded-full h-8 w-8 flex items-center justify-center">
        <FontAwesomeIcon className="text-white text-lg" icon={faExclamation} />
      </span>
      <span className="absolute left-8 -top-3 bg-red-600 text-white rounded-lg font-black px-2">
        ATTENTION
      </span>
      <div className="pt-6 px-5 pb-5">{props.children}</div>
    </div>
  );
};

/*
 * Highlight : Marking Important Sentence
 */
export const Highlight: React.FC = ({ ...props }) => {
  return <span className="bg-yellow-200">{props.children}</span>;
};
