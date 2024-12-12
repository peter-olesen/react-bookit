import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper";
import { PageHeader } from "../components/PageHeader/PageHeader";

export const EditEvent = () => {
  return (
    <>
      <PageHeader title='Edit "Placeholder" event' />
      <ContentWrapper>
        <form action="">
          <label htmlFor="event_title">Title</label>
          <input type="text" name="event_title" id="event_title" />

          <label htmlFor="event_location">Location</label>
          <input type="text" name="event_location" id="event_location" />

          <label htmlFor="event_image">Image URL</label>
          <input type="text" name="event_image" id="event_image" />

          <label htmlFor="event_time">Time</label>
          <input type="time" name="event_time" id="event_time" />

          <label htmlFor="event_date">Title</label>
          <input type="date" name="event_date" id="event_date" />

          <label htmlFor="event_description">Description</label>
          <textarea name="event_description" id="event_description" />
          <div className="Event">
            <input type="submit" value="Edit" />
          </div>
        </form>
      </ContentWrapper>
    </>
  );
};
