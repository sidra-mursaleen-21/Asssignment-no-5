function Link_list(prop) {
  return (
    <>
      <div className="footer-box2">
        <h2>{prop.name}</h2>
        <ul className="list" >
          <li>{prop.list1}</li>
          <li>{prop.list2}</li>
          <li>{prop.list3}</li>
          <li>{prop.list4}</li>
        </ul>
      </div>
    </>
  );
}

export default Link_list;
