import "../App.css";

import axios from "axios";
import { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import ShowResults from "./showResults";
const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudent() {
      try {
        const students = await axios.get("http://localhost:3333/Users");
        console.log(students.data);
        console.log(students.data[0].stepstarget);
        setStudents(students.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent();
  }, []);

  let incNum = (e) => {
    setStudents((students) =>
      students.map((items) =>
        e == items.userId
          ? { ...items, calorieTarget: items.calorieTarget + 500 }
          : items
      )
    );
  };
  let decNum = (e) => {
    setStudents((students) =>
      students.map((items) =>
        e == items.userId
          ? { ...items, calorieTarget: items.calorieTarget - 500 }
          : items
      )
    );
  };

  let incNum1 = (e) => {
    setStudents((students) =>
      students.map((items) =>
        e == items.userId
          ? { ...items, stepstarget: items.stepstarget + 100 }
          : items
      )
    );
  };
  let decNum1 = (e) => {
    setStudents((students) =>
      students.map((items) =>
        e == items.userId
          ? { ...items, stepstarget: items.stepstarget - 100 }
          : items
      )
    );
  };
  let showMap = (e) => {
    setStudents((students) =>
      students.map((items) =>
        e == items.userId
          ? { ...items, showResults: (items.showResults = true) }
          : { ...items, showResults: items.ShowResults == false }
      )
    );
  };
  let hideMap = (e) => {
    setStudents((students) =>
      students.map((items) =>
        e == items.userId
          ? { ...items, showResults: (items.showResults = false) }
          : items
      )
    );
  };

  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);

  return (
    <>
      <div id="content-container" className="container">
        <div id="_bg__level_2"></div>
        <div id="rectangle_353"></div>
        <div id="group_2">
          <div id="workout">Workout</div>
          <img src="skins/mask_group.png" id="mask_group" />
        </div>
        <div id="group_3">
          <div id="nutrition">Nutrition</div>
          <img src="skins/vector.png" id="vector" />
        </div>
        <div id="group_1">
          <div id="steps">Steps</div>

          <div id="vs_walk">
            <img src="skins/vector_ek1.png" id="vector_ek1" />
          </div>
        </div>

        {students.map((user, i) => {
          return (
            <div id={`mt-${user.userId}`} key={i}  onClick={() => hideMap(user.userId)}>
              <div id="rectangle_987"></div>
              <img src="skins/image_22.png" id="image_22" />
              <div id="charvie_sharma">{user.name}</div>
              <div id="_15_oct">{user.performedDate}</div>
              <div id="_22_oct">{user.scheduledDate}</div>
              <div id="charviesharma_gmail_com">{user.email}</div>
              <div id="rectangle_990"></div>

              <div id="mi_notification">
                <div id="group">
                  <img src="skins/vector_ek2.png" id="vector_ek2" />
                </div>
              </div>

              <div id="group_390">
                <CircularProgressbar
                  value={`${(user.stepswalked / user.stepstarget) * 100}`}
                  text={`${user.stepswalked}`}
                />

                <div id="walked">walked</div>
              </div>

              <div id="group_392">
                <Link id="txtdec" to={`/${user.userId}/WorkOut/`}>
                  {" "}
                  {user.feedback == true ? (
                    <div>
                      <div id="rectangle_991"></div>
                      <img src="skins/vector_ek3.png" id="vector_ek3" />
                    </div>
                  ) : (
                    <div>
                      <div id="rectangle_9911"></div>
                      <img src="skins/exc.png" id="vector_ek311" />
                    </div>
                  )}
                </Link>
              </div>

              <div id="group_396">
                <Link id="txtdec" to={`/${user.userId}/Nutrition/`}>
                  <div id="rectangle_991_ek1"></div>
                  <img src="skins/vector_ek4.png" id="vector_ek4" />
                </Link>
              </div>

              <div id="group_394">
                <div id="group_391">
                  <div id="target">target</div>
                  <div id="_4k">{user.stepstarget}</div>
                </div>
                <img src="skins/vector_ek5.png" id="vector_ek5" />
                <img src="skins/vector_ek6.png" id="vector_ek6" />
              </div>

              <div id="group_395">
                <div id="group_391_ek1">
                  <div id="target_ek1">target</div>
                  <div id="_2_5k">{user.calorieTarget}</div>
                </div>
                <img src="skins/vector_ek7.png" id="vector_ek7" />
                <img src="skins/vector_ek8.png" id="vector_ek8" />
              </div>

              {user.performedDate === user.scheduledDate ? (
                <div id="carbon_event_schedule1">
                  <img src="skins/vector_ek9.png" id="vector_ek9" />
                  <img src="skins/vector_ek10.png" id="vector_ek10" />
                  <img src="skins/vector_ek11.png" id="vector_ek11" />
                </div>
              ) : (
                <div id="carbon_event_schedule">
                  <img src="skins/vector_ek9.png" id="vector_ek9" />
                  <img src="skins/vector_ek10.png" id="vector_ek10" />
                  <img src="skins/vector_ek11.png" id="vector_ek11" />
                </div>
              )}

              <div id="bx_user_check">
                <img src="skins/vector_ek12.png" id="vector_ek12" />
              </div>

              <div
                className="group_418"
                onMouseEnter={() => showMap(user.userId)}
               
              >
                <div id="_2547">
                  {parseInt(`${user.proteinConsumed}`) +
                    parseInt(`${user.carbConsumed}`) +
                    parseInt(`${user.fatConsumed}`)}
                </div>

                <PieChart
                  animation
                  animationDuration={500}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    {
                      color: "#E38627",
                      title: "One",
                      value: parseInt(`${user.proteinConsumed}`),
                    },
                    {
                      color: "#C13C37",
                      title: "Two",
                      value: parseInt(`${user.carbConsumed}`),
                    },
                    {
                      color: "#6A2135",
                      title: "Three",
                      value: parseInt(`${user.fatConsumed}`),
                    },
                  ]}
                  labelPosition={50}
                  lengthAngle={360}
                  lineWidth={15}
                  paddingAngle={0}
                  radius={50}
                  rounded
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                />
                <div id="calories">calories</div>
              </div>
              <div>
                {user.showResults ? (
                  <ShowResults
                    consumed1={`${user.proteinConsumed}`}
                    consumed2={`${user.fatConsumed}`}
                    consumed3={`${user.carbConsumed}`}
                    Targetconsumed1={`${user.proteinConsumed}`}
                    Targetconsumed2={`${user.fatConsumed}`}
                    Targetconsumed3={`${user.carbConsumed}`}
                  />
                ) : null}
              </div>

              <div id="group_422" onClick={() => incNum1(user.userId)}>
                <div id="rectangle_991_ek2"></div>
                <img src="skins/vector_ek13.png" id="vector_ek13" />
              </div>

              <div id="group_424" onClick={() => decNum1(user.userId)}>
                <div id="rectangle_991_ek3"></div>
                <img src="skins/vector_ek14.png" id="vector_ek14" />
              </div>

              <div id="group_425" onClick={() => incNum(user.userId)}>
                <div id="rectangle_991_ek4"></div>
                <img src="skins/vector_ek15.png" id="vector_ek15" />
              </div>

              <div id="group_426" onClick={() => decNum(user.userId)}>
                <div id="rectangle_991_ek5"></div>
                <img src="skins/vector_ek16.png" id="vector_ek16" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
