'use server';

import AnimeCard, { AnimeProp } from './components/anime-card';

export const fetchAnime = async (page: number = 1, limit: number = 8) => {
  try {
    const response = await fetch(
      `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`,
    );

    const data = await response.json();

    return data.map((item: AnimeProp, index: number) => (
      <AnimeCard
        key={item.id}
        data={item}
        index={index}
      />
    ));
  } catch (error) {
    console.log(error);
  }
};

export const fetchAnimeById = async (id: string) => {
  try {
    const response = await fetch(`https://shikimori.one/api/animes/${id}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
