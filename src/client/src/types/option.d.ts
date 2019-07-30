import { FormattedMessage as FM } from "react-intl";

export interface IExploreButton {
  text: FM.MessageDescriptor;
  linkUrl: string;
}

export interface IInfoBox {
  svgUrl?: string;
  title?: FM.MessageDescriptor;
  text?: FM.MessageDescriptor;
}

export interface IDetails {
  headerText: FM.MessageDescriptor;
  exploreButtons: IExploreButton[];
  subheaderText: FM.MessageDescriptor;
  infoBoxes?: IInfoBox[];
}

export interface IOption {
  title: string | FM.MessageDescriptor;
  isPreview?: boolean;
  type?: string;
  internalName: string;
  defaultName?: string;
  body: string | FM.MessageDescriptor;
  longDescription?: string | FM.MessageDescriptor;
  position?: number;
  svgUrl: string | undefined;
  licenses?: string[];
  selected?: boolean;
  author?: string;
  version?: string;
  unselectable?: boolean;
  isValidTitle?: boolean;
  author?: string;
  details?: IDetails;
}
