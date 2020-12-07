import ClayCard from "@clayui/card";
import React from "react";
import { Tag } from "..";
import { Icon } from "../../components";
import styles from "./ExpandedCard.module.css";
import * as RepositoryController from "../../controllers/RepositoriesController";
import { connect } from "react-redux";
import moment from "moment";
import Modal from "../Modal/Modal";

const ExpandedCard = (props) => {
  const { repository, markAsFavorite, removeRepository } = props;

  const language = repository?.language;

  const cardInfoArray = [
    { title: "Stars", value: repository?.stars },
    { title: "Forks", value: repository?.forks },
    { title: "Open Issues", value: repository?.openIssues },
    { title: "Age", value: moment(repository?.age, "YYYYMM").fromNow() },
    {
      title: "Last commit",
      value: moment(repository?.lastCommit).format("ll"),
    },
    { title: "License", value: repository?.license },
  ];

  return (
    <ClayCard className={`col-md-12 ${styles.card}`} data-testid="expandedCard">
      <ClayCard.Row className={styles.row}>
        <div className={styles.imageDiv}>
          <div
            className={styles.avatarImage}
            style={{ backgroundImage: `url(${repository.image})` }}
          ></div>
        </div>
        <ClayCard.Body className={styles.data}>
          <div className={styles.titleRow}>
            <ClayCard.Description className={styles.title} displayType="title">
              {repository.name}
            </ClayCard.Description>
            <div className={styles.cardOptions}>
              <Icon
                icon={repository.favorite ? "star" : "star-o"}
                onClick={() => markAsFavorite(repository)}
              />
              <Modal
                icon={"trash"}
                onClickFunction={removeRepository}
                item={repository}
                color={"warning"}
              />
            </div>
          </div>

          <ClayCard.Description
            className={styles.infos}
            truncate={false}
            displayType="text"
          >
            {cardInfoArray.map((info, idx) => (
              <p className={styles.infos} key={idx}>
                {info.title} {info.value}
              </p>
            ))}
          </ClayCard.Description>
          <ClayCard.Description>
            <Tag title={language} />
          </ClayCard.Description>
        </ClayCard.Body>
      </ClayCard.Row>
    </ClayCard>
  );
};

const mapStateToProps = (state) => {
  const {
    repositories: { repositoriesList },
  } = state;
  return { repositoriesList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    markAsFavorite: (repository) =>
      dispatch(RepositoryController.markAsFavorite(repository)),
    removeRepository: (repository) =>
      dispatch(RepositoryController.removeRepository(repository)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpandedCard);
