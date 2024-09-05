import { BorderColor, Margin, Padding } from '@mui/icons-material';
import { Typography } from '@mui/material'
import { color } from 'framer-motion';
import React from 'react'


const HeaderStyle = {
    fontSize: "4rem",
    textAlign: "center",

};

const HeaderDescriptionStyle = {
    fontWeight: "200",
    margin: "5px 0 2% 0",
    textAlign: "center",
    fontSize: "1.5rem",
    color: "red",
};

const SecoundHeaderStyle = {
    fontSize: "1.5rem",
    textAlign: "left",
    color: "red",
};

const BodyStyle = {
    fontSize: "1 rem",
    textAlign: "justify",
};

const containerStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    margin: "0 0 2% 0",
};

const BeyondOffice = () => {
  return (
    <div>
        <p style={HeaderStyle}>
            Beyond Office Hours
        </p>

        <p style={HeaderDescriptionStyle}>
            Because having fun is the secret ingredient
        </p>

        <div style={containerStyle}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ margin: "0 0 0 0" }} src="" alt="Beyond Office Hours" />

                <div
                    style={{
                        backgroundColor: "#052533",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 20,
                        borderColor: "red",
                        borderWidth: "5px"
                    }}
                >
                    <p style={
                          {
                              color: "white", margin: "0 3px 0 3px",
                              fontSize: "1rem", justifyContent: "center", textAlign: "center"
                          }}>
                        III Nacional Congress - October 2023
                    </p>
                </div>
            </div>
        <div style={{ margin: "0 2% 0 2% " }}>
          <Typography style={SecoundHeaderStyle}>
            Team Building Volleyball
          </Typography>
          <Typography style={BodyStyle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            animi! Error laborum animi voluptas vitae excepturi itaque nihil
            obcaecati fugiat facilis, quod, consequatur tempora corrupti.
            Exercitationem, hic omnis similique rerum eligendi qui esse dolore
            labore iusto corporis, dignissimos a commodi! Minus consequuntur
            culpa sunt cupiditate voluptatem molestias nulla, a omnis.
          </Typography>
        </div>
      </div>

      <div style={containerStyle}>
        <div style={{ margin: "0 2% 0 2% " }}>
          <Typography style={SecoundHeaderStyle}>
            Team Building Volleyball
          </Typography>
          <Typography style={BodyStyle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            animi! Error laborum animi voluptas vitae excepturi itaque nihil
            obcaecati fugiat facilis, quod, consequatur tempora corrupti.
            Exercitationem, hic omnis similique rerum eligendi qui esse dolore
            labore iusto corporis, dignissimos a commodi! Minus consequuntur
            culpa sunt cupiditate voluptatem molestias nulla, a omnis.
          </Typography>
        </div>

        <div>
          <img
            style={{ margin: "0 0 0 0" }}
            src=""
            alt="Beyond Office Hours 2"
          />
        </div>
      </div>
    </div>
  );
}

export default BeyondOffice