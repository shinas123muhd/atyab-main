const Map = () => {
  return (
    <div style={{ width: "100%", maxWidth: "100vw", height: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57708.35741995854!2d55.4339696!3d25.3118519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5ec3c5fd59c7%3A0xdef8ecda23a63dc7!2sAjmal%20Trading%20LLC!5e0!3m2!1sen!2sin!4v1724661263453!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default Map;
