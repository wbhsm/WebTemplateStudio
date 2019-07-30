import * as React from "react";
import { InjectedIntlProps, injectIntl, defineMessages } from "react-intl";

import { IExploreButton } from "../../types/option";

import styles from "./styles.module.css";

interface IProps {
  exploreButtons: IExploreButton[];
}

type Props = InjectedIntlProps & IProps;

const messages = defineMessages({
  exploreLabel: {
    id: "exploreBar.exploreLabel",
    defaultMessage: "Explore:"
  }
});

const ExploreBar = ({ exploreButtons, intl }: Props) => {
  return (
    <div className={styles.mainBar}>
      <span className={styles.label}>
        {intl.formatMessage(messages.exploreLabel)}
      </span>
      {exploreButtons.map(button => {
        return (
          <button className={styles.button}>
            {intl.formatMessage(button.text)}
          </button>
        );
      })}
    </div>
  );
};

export default injectIntl(ExploreBar);
