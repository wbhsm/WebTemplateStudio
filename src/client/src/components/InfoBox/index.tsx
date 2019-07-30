import * as React from "react";
import { IInfoBox } from "../../types/option";
import { InjectedIntlProps, injectIntl } from "react-intl";

import styles from "./styles.module.css";

type Props = InjectedIntlProps & IInfoBox;

const InfoBox = ({ svgUrl, title, text, intl }: Props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.iconContainer}>
        <img src={svgUrl} alt="" />
      </div>
      {title && <h4 className={styles.title}>{intl.formatMessage(title)}</h4>}
      {text && <p className={styles.text}>{intl.formatMessage(text)}</p>}
    </div>
  );
};

export default injectIntl(InfoBox);
