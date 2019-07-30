import * as React from "react";
import { InjectedIntlProps, injectIntl, FormattedMessage } from "react-intl";

import { IOption } from "../../types/option";
import ExploreBar from "../ExploreBar";
import InfoBox from "../InfoBox";

import styles from "./styles.module.css";

interface IProps {
  option: IOption;
}

type Props = InjectedIntlProps & IProps;

const AzureServiceDetails = ({ option, intl }: Props) => {
  return (
    <>
      {option.details && (
        <div className={styles.mainContainer}>
          <div>
            <h2 className={styles.title}>
              {intl.formatMessage(
                option.title as FormattedMessage.MessageDescriptor
              )}
            </h2>
          </div>
          <div className={styles.headerContainer}>
            <h1 className={styles.header}>
              {intl.formatMessage(option.details.headerText)}
            </h1>
            <img className={styles.mainIcon} src={option.svgUrl} alt="" />
          </div>
          {option.details.exploreButtons.length > 0 && (
            <ExploreBar exploreButtons={option.details.exploreButtons} />
          )}
          <div>
            <h3 className={styles.subheader}>
              {intl.formatMessage(option.details.subheaderText)}
            </h3>
          </div>
          {option.details.infoBoxes && (
            <div className={styles.infoRow}>
              {option.details.infoBoxes.map(infoBoxData => {
                return (
                  <InfoBox
                    svgUrl={infoBoxData.svgUrl}
                    title={infoBoxData.title}
                    text={infoBoxData.text}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default injectIntl(AzureServiceDetails);
