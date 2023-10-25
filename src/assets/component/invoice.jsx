import { useReducer } from "react";

export const ACTIONS = {
  CLEAR: "clear",
  HANDEL_CLICK: "handleClick",
  CALCULATE_RESULT: "calculateResult",
  SLICELASCHAR: "sliceLastChar",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.HANDEL_CLICK:
      return {
        ...state,
        currentValue: ((state?.value || "") + payload).replace("**0.5", "√").replace("**", "^"),
        value: (state?.value || "") + payload,
      };

    case ACTIONS.CALCULATE_RESULT:
      try {
        let q = eval(state?.value || "").toString();
        return {
          ...state,
          value: q,
          currentValue: q,
        };
      } catch (error) {
        console.log("🚀 ~ file: invoice.jsx:27 ~ reducer ~ error:", error);
        return {};
      }

    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.SLICELASCHAR: {
      return {
        ...state,
        currentValue: (state?.value).slice(0, -1),
        value: (state?.value).slice(0, -1),
      };
    }
  }
}

const Mat = () => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <div>
      <div className="output"> {state?.currentValue || ""}</div>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "1",
          })
        }
      >
        1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "2",
          })
        }
      >
        2
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "3",
          })
        }
      >
        3
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "+",
          })
        }
      >
        +
      </button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "4",
          })
        }
      >
        4
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "5",
          })
        }
      >
        5
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "6",
          })
        }
      >
        6
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "-",
          })
        }
      >
        -
      </button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "7",
          })
        }
      >
        7
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "8",
          })
        }
      >
        8
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "9",
          })
        }
      >
        9
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "*",
          })
        }
      >
        *
      </button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "0",
          })
        }
      >
        0
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: ".",
          })
        }
      >
        .
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.CALCULATE_RESULT,
          })
        }
      >
        =
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "/",
          })
        }
      >
        /
      </button>
      <br />
      <button
        className="clear"
        onClick={() =>
          dispatch({
            type: ACTIONS.CLEAR,
          })
        }
      >
        C
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "**",
          })
        }
      >
        ^
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.SLICELASCHAR,
          })
        }
      >
        x
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.HANDEL_CLICK,
            payload: "**0.5",
          })
        }
      >
        √
      </button>
    </div>
  );
};
export default Mat;
