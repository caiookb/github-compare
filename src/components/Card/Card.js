import ClayBadge from "@clayui/badge";
import ClayCard from "@clayui/card";
import ClayIcon, { ClayIconSpriteContext } from "@clayui/icon";
import { Tag } from "..";
import { spritemap } from "../../App";
import { Icon } from "../../components";
import styles from "./Card.module.css";

const Card = (props) => {
  const { repository } = props;

  const title = repository?.title;
  const language = repository?.language;

  const cardInfoArray = [
    { title: "Stars", value: repository?.stars },
    { title: "Forks", value: repository?.forks },
    { title: "Open Issues", value: repository?.openIssues },
    { title: "Age", value: repository?.age },
    { title: "Last commit", value: repository?.lastCommit },
    { title: "License", value: repository?.license },
  ];

  return (
    <ClayCard className={`col-md-6 ${styles.card}`}>
      <ClayCard.Row className={styles.titleRow}>
        <ClayIconSpriteContext.Provider value={spritemap}>
          <div
            className={styles.cardImage}
            style={{ backgroundImage: `url(${repository.image})` }}
          ></div>
          <ClayCard.Description className={styles.title} displayType="title">
            {repository.name}
          </ClayCard.Description>
          <div className={styles.cardOptions}>
            <Icon icon={"star-o"} />
            <Icon icon={"trash"} />
          </div>
        </ClayIconSpriteContext.Provider>
      </ClayCard.Row>
      <ClayCard.Body>
        <ClayCard.Description
          className={styles.infos}
          truncate={false}
          displayType="text"
        >
          {cardInfoArray.map((info, idx) => (
            <p className={styles.infos}>
              <strong>{info.title}</strong> {info.value}
            </p>
          ))}
          <Tag title={language} />
        </ClayCard.Description>
      </ClayCard.Body>
    </ClayCard>
  );
};

export default Card;
