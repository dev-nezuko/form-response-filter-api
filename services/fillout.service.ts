import dotenv from 'dotenv';

dotenv.config();

export const fetchForm = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.FILLOUT_API_BASE_URL}/forms/${id}/submissions`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTHORIZATION_TOKEN}`,
        },
      },
    );
    // console.log(response);
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
