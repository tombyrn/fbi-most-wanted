/* FBI RESPONSE OBJECT
{
  "total": 0,
  "page": 0,
  "items": [
    {
      "@id": "string",
      "uid": "string",
      "title": "string",
      "description": "string",
      "images": [
        {
          "caption": "string",
          "original": "string",
          "large": "string",
          "thumb": "string"
        }
      ],
      "files": [
        {
          "url": "string",
          "name": "string"
        }
      ],
      "warning_message": "string",
      "remarks": "string",
      "details": "string",
      "additional_information": "string",
      "caution": "string",
      "reward_text": "string",
      "reward_min": 0,
      "reward_max": 0,
      "dates_of_birth_used": [
        "string"
      ],
      "place_of_birth": "string",
      "locations": [
        "string"
      ],
      "field_offices": [
        "string"
      ],
      "legat_names": [
        "string"
      ],
      "status": "string",
      "person_classification": "string",
      "poster_classification": "string",
      "ncic": "string",
      "age_min": 0,
      "age_max": 0,
      "weight_min": 0,
      "weight_max": 0,
      "height_min": 0,
      "height_max": 0,
      "eyes": "string",
      "hair": "string",
      "build": "string",
      "sex": "string",
      "race": "string",
      "nationality": "string",
      "scars_and_marks": "string",
      "complexion": "string",
      "occupations": "string",
      "possible_countries": [
        "string"
      ],
      "possible_states": [
        "string"
      ],
      "modified": "string",
      "publication": "string",
      "path": "string"
    }
  ]
}
*/


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

}
