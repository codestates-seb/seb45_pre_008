CREATE TABLE IF NOT EXISTS ANSWER (
    answer_id bigint NOT NULL AUTO_INCREMENT,
    body varchar NOT NULL,
    ANSWER_STATUS varchar NOT NULL,
    CREATED_AT datetime NOT NULL,
    PRIMARY KEY (answer_id)
);