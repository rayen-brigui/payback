import React from "react";
import Link from "next/link";
const RoleplayFooter = () => {
  return (
    <footer className="roleplay-footer">
      <div className="footer-content">
        <div className="server-info">
          <h3>About Our Roleplay Server</h3>
          <p>
            Welcome to the immersive world of our roleplay server! We bring your
            wildest dreams to life through storytelling, adventure, and
            collaboration. Join our vibrant community and craft your own
            narrative.
          </p>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/rules">Server Rules</Link>
            </li>
            <li>
              <Link href="/characters">Create Characters</Link>
            </li>
            <li>
              <Link href="/events">Upcoming Events</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <p>
            If you have any questions or suggestions, feel free to reach out to
            us. We value your feedback and are here to make your roleplay
            experience extraordinary.
          </p>
          <a href="/contact" className="contact-button">
            Contact Us
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} PayBack Roleplay Server. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default RoleplayFooter;
