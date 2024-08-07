import { useContext } from "react";
import { MyContext } from "../store/contextObject";

function Value() {
  const { data, handleOnClickDelete } = useContext(MyContext);
  return (
    <>
      <div>
        {data.map((item, index) => {
          return (
            <div className="container text-center" key={index}>
              <div className="row">
                <div className="col-4">
                  <p>{item.name}</p>
                </div>
                <div className="col-4">
                  <p>{item.date}</p>
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleOnClickDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Value;
