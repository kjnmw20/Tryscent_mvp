import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import SurveyGender from "./pages/SurveyGender";
import Survey from "./pages/Survey";
import SurveyStep2 from "./pages/SurveyStep2";
import SurveyStep3 from "./pages/SurveyStep3";
import SurveyStep4 from "./pages/SurveyStep4";
import Loading from "./pages/Loading";
import AnimationTest from "./pages/AnimationTest";
import DesignPlayground from "./pages/DesignPlayground";
import Result from "./pages/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/design-playground",
    Component: DesignPlayground,
  },
  {
    path: "/animation-test",
    Component: AnimationTest,
  },
  {
    path: "/survey",
    Component: SurveyGender,
  },
  {
    path: "/survey/step2",
    Component: Survey,
  },
  {
    path: "/survey/step3",
    Component: SurveyStep2,
  },
  {
    path: "/survey/step4",
    Component: SurveyStep3,
  },
  {
    path: "/loading",
    Component: Loading,
  },
  {
    path: "/result",
    Component: Result,
  },
  {
    path: "*",
    Component: Home,
  },
]);