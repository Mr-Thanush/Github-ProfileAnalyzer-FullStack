import pool from '../config/db.js';

export const saveProfileToDB=async(profile)=>{
    const query=
    `INSERT INTO github_analyze_profiles (
        github_id,
        username,
        name,
        bio,
        public_repos,
        followers,
        following,
        public_url,
        created_at
    ) VALUES (?,?,?,?,?,?,?,?,?)

    ON DUPLICATE KEY UPDATE

    public_repos=VALUES(public_repos),
    followers=VALUES(followers),
    following=VALUES(following)
    `;

    await pool.execute(query,[
        profile.github_id,
        profile.username,
        profile.name,
        profile.bio,
        profile.public_repos,
        profile.followers,
        profile.following,
        profile.public_url,
        profile.created_at
    ])
}

export const getAllProfiles=async()=>{
    const [rows]=await pool.query(
        "SELECT * FROM github_analyze_profiles"
    )
    return rows;
}

export const getSingleProfile=async(username)=>{
   const [rows]=await pool.query(
    "SELECT * FROM github_analyze_profiles WHERE username=?",[username]
   )

   return rows;
}




