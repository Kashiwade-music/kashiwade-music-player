import * as React from "react";
import { SVGProps } from "react";
import Box from "@mui/material/Box";
import { pink } from "@mui/material/colors";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const LeftView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M512 76.8c0-24.726-20.074-44.8-44.8-44.8H44.8C20.074 32 0 52.074 0 76.8v358.4C0 459.926 20.074 480 44.8 480h422.4c24.726 0 44.8-20.074 44.8-44.8V76.8Zm-42.005-1.445H173.181v361.29h296.814V75.355Z" />
  </svg>
);

export const MidUpperView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M512 76.8c0-24.726-20.074-44.8-44.8-44.8H44.8C20.074 32 0 52.074 0 76.8v358.4C0 459.926 20.074 480 44.8 480h422.4c24.726 0 44.8-20.074 44.8-44.8V76.8Zm-40.893 115.503H40.893v242.342h430.214V192.303Z" />
  </svg>
);

export const RightView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M512 76.8c0-24.726-20.074-44.8-44.8-44.8H44.8C20.074 32 0 52.074 0 76.8v358.4C0 459.926 20.074 480 44.8 480h422.4c24.726 0 44.8-20.074 44.8-44.8V76.8Zm-174.293-1.445H40.893v361.29h296.814V75.355Z" />
  </svg>
);
