import React from "react";

const Card = ({ id, name, type, imageUrl }) => {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "คุณแน่ใจหรือไม่ว่าต้องการลบร้านค้านี้?"
    );
    if (!confirmDelete) return;
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/restaurant/" + id,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Restaurant deleted successfully !!");
        window.location.reload(); // Reload the page to reflect changes
      } else {
        alert("Failed to delete restaurant.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={imageUrl} alt="Preview" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <a href={"/update/" + id} className="btn btn-warning">
            Edit
          </a>
          <button onClick={() => handleDelete(id)} className="btn btn-error">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
