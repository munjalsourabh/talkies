export interface DetailsModel {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: boolean;
    budget: number;
    credits: {
        cast: [Cast],
        crew: [{
            credit_id: string
            department: string
            gender: 2
            id: number
            job: string
            name: string
            profile_path: string
        }]};
    genres: [{id: number, name: string}];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: [];
    production_countries: [];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: [];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    videos: {
        results: [
            {
                id: string;
                iso_639_1: string;
                iso_3166_1: string;
                key: string;
                name: string;
                site: string;
                size: number;
                type: string;
            }
        ]
    };
    vote_average: number;
    vote_count: number;
}

export interface Cast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: 2;
    id: number;
    name: string;
    order: number;
    profile_path: string;
}