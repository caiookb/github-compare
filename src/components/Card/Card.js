import ClayCard from "@clayui/card";
import React from "react";

import { Icon, Modal, Tag } from "../../components";
import styles from "./Card.module.css";
import * as RepositoryController from "../../controllers/RepositoriesController";
import { connect } from "react-redux";
import moment from "moment";

const Card = (props) => {
  const { repository, markAsFavorite, removeRepository, key } = props;

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
    <ClayCard
      className={`col-md-6 ${styles.card}`}
      key={key}
      data-testid="card"
    >
      <ClayCard.Row className={styles.titleRow}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url(${repository?.image})` }}
        ></div>
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
      </ClayCard.Row>
      <ClayCard.Body>
        {cardInfoArray.map((info, idx) => (
          <ClayCard.Description
            className={styles.infos}
            truncate={false}
            displayType="text"
            key={idx}
          >
            <strong key={idx}>{info.title}</strong> {info.value}
          </ClayCard.Description>
        ))}

        <Tag title={language} />
      </ClayCard.Body>
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
