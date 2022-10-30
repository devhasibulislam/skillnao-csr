function addCourseId(id) {
  const ids = getCourseIds();
  if (!ids?.includes(id)) {
    ids.push(id);
    localStorage?.setItem("skillNaoCourseIds", JSON.stringify(ids));
  }
}

function getCourseIds() {
  const cart = localStorage?.getItem("skillNaoCourseIds");
  let items = null;

  if (cart) {
    items = JSON.parse(cart);
  } else {
    items = [];
  }

  return items;
}

export default addCourseId;
