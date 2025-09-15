import image from './image/mamta.jpeg';

function Profile() {
  return (
    <div className="profile-section">
      <div className="profile-card">
        <div className="profile-left">
          <img
            src={image}
            alt="Profile"
            className="profile-img"
          />
        </div>
        <div className="profile-right">
          <h2>About Me</h2>
          <p>
            Hi, I'm Mamta Kurdia, a BCA student at Pillai College of Arts, Commerce & Science 
            with a deep passion for web development. I enjoy turning ideas into interactive, 
            responsive web applications using React and JavaScript. With a strong foundation 
            in both academics and practical skills, I strive to create user-friendly digital 
            experiences that make an impact. I am eager to take on creative projects where I 
            can grow, innovate, and bring meaningful solutions to life.
          </p>

          <h2>Education</h2>
          <ul>
            <li>
              <strong>Bachelor of Computer Applications (2025 - Present)</strong>
              <br />
              Pillai College of Arts, Commerce & Science, New Panvel
              <br />
              Semester 1 SGPA: 8.36 | Semester 2 SGPA: 9.27
            </li>
            <li>
              <strong>Higher Secondary in Science (2023 - 2024)</strong>
              <br />
              K.J Somaiya, VidyaVihar, Mumbai
              <br />
              HSC Board: 62.30%
            </li>
            <li>
              <strong>Secondary Education (2021 - 2022)</strong>
              <br />
              Chembur English High School
              <br />
              SSC Board: 82.80%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
