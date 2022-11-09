export const getAllPostsService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserPostsService = async (id) => {
  const response = await fetch(
    "${process.env.REACT_APP_BACKEND}/user/${id}/posts"
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getSinglePostService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/post/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const registerUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const getMyUserDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserDataService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();
  const getUserdata = async ([token]) => {
    const response = await fetch("${process.env.REACT_APP_BACKEND}/user", {
      headers: {
        Authoritation: token,
      },
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message);
    }
    return json.data;
  };

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendPostService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deletePostService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/post/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
