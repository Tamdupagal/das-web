import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./Faq.module.scss";

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={1}
    sx={{ width: "80%", margin: "auto" }}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid #005778`,
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
            fontSize: "2.8rem",
            fontWeight: "600",
            color: "#fd7e14",
            padding: "1rem",
            // paddingLeft: "10rem",
          }}
        >
          Full-stack Game Development/ Design course
        </h1>
        <div className={styles.co}>
          <p
            style={{
              textAlign: "left",
              fontSize: "2rem",
              fontWeight: "600",
              color: "#005778",
              padding: "1rem",
              // paddingLeft: "6rem",
            }}
          >
            200+ hours of training & project building
          </p>
          <p
            style={{
              textAlign: "left",
              fontSize: "2rem",
              fontWeight: "600",
              color: "#005778",
              padding: "1rem",
            }}
          >
            3+ industry-standard guided projects{" "}
          </p>
          <p
            style={{
              textAlign: "left",
              fontSize: "2rem",
              fontWeight: "600",
              color: "#005778",
              padding: "1rem",
            }}
          >
            6 learning modules
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
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              minHeight={100}
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 1: Introduction to Game Development</h5>
                <h6> 📃4 Modules</h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16} pt={2} pb={2}>
                Module 1: Introduction to game development, game design
                principles, and game engines
              </Typography>
              <Typography fontSize={16}>
                Module 2: Introduction to programming languages and how to
                choose the right one for game development{" "}
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Setting up a game development environment and
                installing necessary software
              </Typography>
              <Typography fontSize={16}>
                Module 4: Introduction to game development concepts, such as
                game loops and input handling
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
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 2: 2D Game Development</h5>
                <h6> 📃4 Modules</h6>
                <h6>
                  Project: Creating a simple 2D game using Unity or Unreal
                  Engine
                </h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Introduction to 2D game development, 2D game engines,
                and 2D sprites
              </Typography>
              <Typography fontSize={16}>
                Module 2: Creating and animating 2D sprites and creating a basic
                game world
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Implementing basic game mechanics, such as jumping and
                collision detection
              </Typography>
              <Typography fontSize={16}>
                Module 4: Creating a simple 2D game using Unity or Unreal Engine
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
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 3: 3D Game Development</h5>
                <h6> 📃3 Modules</h6>
                <h6>
                  Project: Creating a simple 2D game using Unity or Unreal
                  Engine
                </h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Introduction to 3D game development, 3D game engines,
                and 3D models
              </Typography>
              <Typography fontSize={16}>
                Module 2: Creating and animating 3D models and creating a basic
                game world{" "}
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Implementing basic game mechanics, such as physics and
                lighting{" "}
              </Typography>
              <Typography fontSize={16}>
                Module 4: Creating a simple 3D game using Unity or Unreal Engine
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
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 4: Multiplayer Game Development</h5>
                <h6> 📃3 Modules</h6>
                <h6>
                  Project: Creating a simple multiplayer game using Unity or
                  Unreal Engine
                </h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Introduction to multiplayer game development and
                networking
              </Typography>
              <Typography fontSize={16}>
                Module 2: Server-client architecture and how to synchronize game
                state between players
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Creating a simple multiplayer game using Unity or
                Unreal Engine
              </Typography>
              <Typography fontSize={16}>
                Module 4: Implementing multiplayer features such as matchmaking
                and voice chat
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 5: Game Design and Mechanics</h5>
                <h6> 📃 3 Modules</h6>
                <h6>Project: Implementing game mechanics in a sample game</h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Introduction to game design principles and how to
                create engaging and immersive game experiences{" "}
              </Typography>
              <Typography fontSize={16}>
                Module 2: Understanding game mechanics such as game balancing,
                level design, and player progression
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Implementing game mechanics in a sample game
              </Typography>
              <Typography fontSize={16}>
                Module 4: Understanding player psychology and how to create a
                fun and engaging game experience
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
            style={{
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>
                  Month 6: Game Testing and Debugging, Game Monetization, and
                  Final Project
                </h5>
                <h6> 📃4 Modules</h6>
                <h6> Project: Final project, presentation, and Q&A</h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Introduction to game testing and debugging, unit
                testing, playtesting, and how to use debugging tools
              </Typography>
              <Typography fontSize={16}>
                Module 2: Debugging and testing a sample game, identifying and
                fixing common game development bugs and issues
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Introduction to game monetization, different revenue
                models, in-app purchases, ads and premium content
              </Typography>
              <Typography fontSize={16}>
                Module 4: Monetizing a sample game, understanding player
                engagement and creating a sustainable game monetization strategy
              </Typography>
              <Typography fontSize={16}>
                Module 5: Final project, presentation and Q&A
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className={styles.division3}>
          <Accordion
            className={styles.cont}
            expanded={expanded === "panel21"}
            onChange={handleChange("panel21")}
            fontSize={16}
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel21d-content"
              id="panel21d-header"
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 1: Introduction to Game Design</h5>
                <h6> 📃4 Modules</h6>
                <h6>
                  Projects: Create a game design document for a simple game
                </h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16} pt={2} pb={2}>
                Module 1: Introduction to game design, game design principles,
                and game mechanics
              </Typography>
              <Typography fontSize={16}>
                Module 2: Understanding player psychology and how to create a
                fun and engaging game experience
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Game design tools and software
              </Typography>
              <Typography fontSize={16}>
                Module 4: Game design documentation and prototyping
              </Typography>
              <Typography fontSize={16}>
                Learning Outcomes: Understand the basics of game design and game
                design principles Understand player psychology and how to create
                a fun and engaging game experience Familiarity with game design
                tools and software Understand how to create game design
                documentation and prototypes Projects: Create a game design
                document for a simple game Create a prototype for a simple game
                using game design software
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel22"}
            onChange={handleChange("panel22")}
            minHeight={100}
          >
            <AccordionSummary
              aria-controls="panel22d-content"
              id="panel22d-header"
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 2: Level Design</h5>
                <h6> 📃4 Modules</h6>
                <h6>Projects: Create a level layout for a simple game</h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Introduction to level design and how to create
                immersive game worlds
              </Typography>
              <Typography fontSize={16}>
                Module 2: Understanding how to create engaging level layouts and
                level flow
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Implementing level mechanics and level scripting
              </Typography>
              <Typography fontSize={16}>
                Module 4: Understanding how to create and implement puzzles and
                challenges
              </Typography>
              <Typography fontSize={16}>
                Learning Outcomes: Understand the basics of level design and how
                to create immersive game worlds Understand how to create
                engaging level layouts and level flow Familiarity with level
                mechanics and level scripting Understand how to create and
                implement puzzles and challenges Projects: Create a level layout
                for a simple game Implement level mechanics and scripting for a
                simple game
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel23"}
            onChange={handleChange("panel23")}
          >
            <AccordionSummary
              aria-controls="panel23d-content"
              id="panel23d-header"
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 3: Game Mechanics</h5>
                <h6> 📃3 Modules</h6>
                <h6>
                  Project: Create and implement game rules and win conditions
                  for a simple game
                </h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Understanding game mechanics such as game balancing,
                player progression, and game economy
              </Typography>
              <Typography fontSize={16}>
                Module 2: Understanding how to implement game mechanics such as
                combat, inventory, and skill systems
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Understanding how to create and implement game rules
                and win conditions{" "}
              </Typography>
              <Typography fontSize={16}>
                Module 4: Understanding how to create and implement game
                mechanics that are unique to the game&apos;s genre.{" "}
              </Typography>
              <Typography fontSize={16}>
                Learning Outcomes: Understand game mechanics such as game
                balancing, player progression, and game economy Familiarity with
                implementing game mechanics such as combat, inventory, and skill
                systems Understand how to create and implement game rules and
                win conditions Understand how to create and implement game
                mechanics that are unique to the games genre. Projects:
                Implement game mechanics for a simple game Create and implement
                game rules and win conditions for a simple game Create and
                implement game mechanics that are unique to the game&apos;s
                genre.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel24"}
            onChange={handleChange("panel24")}
          >
            <AccordionSummary
              aria-controls="panel23d-content"
              id="panel23d-header"
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 4: Game Monetization and Business Models</h5>
                <h6> 📃4 Modules</h6>
                <h6>
                  Projects: Create a monetization strategy for a simple game
                </h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Understanding different revenue models and
                monetization strategies
              </Typography>
              <Typography fontSize={16}>
                Module 2: Understanding player engagement and how to create a
                sustainable monetization strategy
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Understanding how to implement in-app purchases, ads,
                and premium content{" "}
              </Typography>
              <Typography fontSize={16}>
                Module 4: Understanding the business side of game development
                and how to plan for success
              </Typography>
              <Typography fontSize={16}>
                Learning Outcomes: Understand different revenue models and
                monetization strategies Understand player engagement and how to
                create a sustainable monetization strategy Familiarity with
                implementing in-app purchases, ads, and premium content
                Understand the business side of game development and how to plan
                for success{" "}
              </Typography>
              <Typography fontSize={16}>
                Projects: Create a monetization strategy for a simple game
                Implement in-app purchases, ads, and premium content for a
                simple game Create a business plan for a simple game{" "}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel26"}
            onChange={handleChange("panel26")}
          >
            <AccordionSummary
              aria-controls="panel23d-content"
              id="panel23d-header"
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 5: Game Testing and Quality Assurance</h5>
                <h6> 📃3 Modules</h6>
                <h6>
                  Projects: Test and debug a simple game Conduct playtesting
                </h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Introduction to game testing and quality assurance
              </Typography>
              <Typography fontSize={16}>
                Module 2: Understanding how to test and debug a game
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 3: Understanding how to conduct playtesting and user
                research{" "}
              </Typography>
              <Typography fontSize={16}>
                Module 4: Understanding how to implement and test game mechanics
                and features
              </Typography>
              <Typography fontSize={16}>
                Learning Outcomes: Understand the basics of game testing and
                quality assurance Familiarity with how to test and debug a game
                Understand how to conduct playtesting and user research
                Understand how to implement and test game mechanics and features
              </Typography>
              <Typography fontSize={16}>
                Projects: Test and debug a simple game Conduct playtesting
                Conduct user research for a simple game Implement and test game
                mechanics and features for a simple game
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel25"}
            onChange={handleChange("panel25")}
            style={{
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <AccordionSummary
              aria-controls="panel23d-content"
              id="panel23d-header"
              className={styles.accordian}
            >
              <Typography color={"#005778"} className={styles.accor}>
                <h5>Month 6: Final Project and Presentation</h5>
                <h6> 📃3 Modules</h6>
                <h6>Project: Presenting the final project and Q&A</h6>
              </Typography>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16}>
                Module 1: Introduction to the final project and team formation
              </Typography>
              <Typography fontSize={16}>
                Module 2-4: Working on the final project, incorporating all the
                knowledge and skills learned throughout the course
              </Typography>{" "}
              <Typography fontSize={16}>
                Module 5: Presenting the final project and Q&A{" "}
              </Typography>
              <Typography fontSize={16}>
                Learning Outcomes: Apply all the knowledge and skills learned
                throughout the course to create a complete game Understand the
                process of creating a game from idea to final product Understand
                how to present and pitch a game to an audience
              </Typography>
              <Typography fontSize={16}>
                Projects: Create a complete game as a final project Present the
                final project to an audience
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
