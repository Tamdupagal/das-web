import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./faq.module.scss";

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={1}
    sx={{ width: "80%", margin: "auto" }}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `2px solid #005778`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={styles.containers}>
      <div className={styles.Contt}>
        <h1
          style={{
            textAlign: "left",
            fontSize: "2.3rem",
            fontWeight: "600",
            color: "#005778",
            paddingLeft: "6rem",
          }}
        >
          Web 3 Game Development Course
        </h1>
        <div className={styles.co}>
          <p
            style={{
              textAlign: "left",
              fontSize: "1.8rem",
              fontWeight: "600",
              color: "#005778",
              paddingBottom: "1.5rem",
              paddingTop: "1.5rem",
              paddingLeft: "6rem",
            }}
          >
            250+ hours of training & project building
          </p>
          <p
            style={{
              textAlign: "left",
              fontSize: "1.7rem",
              fontWeight: "600",
              color: "#005778",
              paddingBottom: "1.5rem",
              paddingTop: "1.5rem",
              paddingLeft: "6rem",
            }}
          >
            8+ industry-standard guided projects{" "}
          </p>
          <p
            style={{
              textAlign: "left",
              fontSize: "1.7rem",
              fontWeight: "600",
              color: "#005778",
              paddingBottom: "1.5rem",
              paddingTop: "1.5rem",
              paddingLeft: "6rem",
            }}
          >
            8 learning modules
          </p>
        </div>
      </div>

      <div className={styles.division}>
        <div className={styles.division2}>
          <Accordion
            className={styles.cont}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            fontSize={14}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography fontSize={16} color={"#005778"}>
                Module 1 (weeks 1-4): Introduction to Web3 Gaming
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14} pt={2} pb={2}>
                Learning Outcomes: Understand the basics of web3 gaming,
                including what it is, how it differs from traditional gaming,
                and the technologies and platforms involved. Projects: Create a
                simple web3 game using a platform like Ethereum or EOS.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            minHeight={100}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography fontSize={16} color={"#005778"}>
                Module 2 (Week 5-8): Smart Contracts and Web3 Development
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14}>
                Learning Outcomes: Learn how to create and deploy smart
                contracts on web3 platforms, and how to integrate them into web3
                games. Projects: Create a web3 game that utilizes smart
                contracts for in-game transactions and other functionality.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography fontSize={16} color={"#005778"}>
                Module 3 (Week 9-12): Web3 Game Design and Mechanics{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14}>
                Learning Outcomes: Learn how to design and implement web3 game
                mechanics, such as non-fungible tokens (NFTs), decentralized
                finance (Defi), and blockchain-based economies. Projects: Create
                a web3 game that utilizes NFTs, DeFi, and blockchain-based
                economies.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography fontSize={16} color={"#005778"}>
                Module 4 (Week 13-16): Web3 Multiplayer Games{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14}>
                Learning Outcomes: Learn how to create multiplayer web3 games
                including how to handle player interactions and game state
                management. Projects: Create a web3 multiplayer game.
              </Typography>
              <Typography fontSize={14}>
                Module 2: Server-client architecture and how to synchronize game
                state between players
              </Typography>{" "}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography fontSize={16} color={"#005778"}>
                Module 5 (Week 17-20): Web3 Game Monetization and Marketing{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14}>
                Learning Outcomes: Learn how to monetize web3 games and how to
                market them to a wider audience. Projects: Create a web3 game
                that incorporates monetization strategies and develop a
                marketing plan for the game.
              </Typography>
              <Typography fontSize={14}>
                Module 2: Understanding game mechanics such as game balancing,
                level design, and player progression
              </Typography>{" "}
              <Typography fontSize={14}>
                Module 3: Implementing game mechanics in a sample game
              </Typography>
              <Typography fontSize={14}>
                Module 4: Understanding player psychology and how to create a
                fun and engaging game experience
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography fontSize={16} color={"#005778"}>
                Module 6 (Week 21-24): Web3 Game Security
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14}>
                Learning Outcomes: Learn how to secure web3 games and protect
                them from malicious attacks. Projects: Create a web3 game with
                security measures in place.
              </Typography>
              <Typography fontSize={14}>
                Module 2: Debugging and testing a sample game, identifying and
                fixing common game development bugs and issues
              </Typography>{" "}
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography fontSize={16} color={"#005778"}>
                Module 7 (Week 25-28): Web3 Game Analytics and Metrics{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14}>
                Learning Outcomes: Learn how to secure web3 games and protect
                them from malicious attacks. Projects: Create a web3 game with
                security measures in place.
              </Typography>
              <Typography fontSize={14}>
                Module 2: Debugging and testing a sample game, identifying and
                fixing common game development bugs and issues
              </Typography>{" "}
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography fontSize={16} color={"#005778"}>
                Module 8 (Week 29-36): Web3 Game Capstone Project{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={14}>
                Learning Outcomes: Work on a final project to put into practice
                all the skills learned in the previous months.
              </Typography>
              <Typography fontSize={14}>
                Projects: Create a full web3 game that incorporates all the
                elements learned throughout the course.
              </Typography>{" "}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
