import ev from "./Events.module.scss";
import edit from "../../assets/icons/edit.png";
import trash from "../../assets/icons/trash.png";

export const Events = () => {
  return (
    <div className={ev.Events}>
      <h2>Events this month</h2>
      <div className={ev.SingleEvent}>
        <div className={ev.EventInfo}>
          <p>Medina</p>
          <p>Falkoner Teatret</p>
          <p>D. 14/7-2025</p>
          <p>Kl. 20.30</p>
        </div>
        <div className={ev.EventEdit}>
          <span className={ev.Edit}>
            <img src={edit} alt="Edit event" />
          </span>
          <span className={ev.Trash}>
            <img src={trash} alt="Delete event" />
          </span>
        </div>
      </div>

      <h2>Your next event</h2>
      <div className={ev.SingleEvent}>
        <div className={ev.EventInfo}>
          <p>Medina</p>
          <p>Falkoner Teatret</p>
          <p>D. 14/7-2025</p>
          <p>Kl. 20.30</p>
        </div>
        <div className={ev.EventEdit}>
          <span className={ev.Edit}>
            <img src={edit} alt="Edit event" />
          </span>
          <span className={ev.Trash}>
            <img src={trash} alt="Delete event" />
          </span>
        </div>
      </div>
    </div>
  );
};
