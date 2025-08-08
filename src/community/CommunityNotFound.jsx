function NotFound() {
    return (
      <div className="text-center mt-6">
        <h2 className="text-xl font-bold">User Not Found</h2>
        <p className="text-red-500">The email you entered does not exist in our system or have been deleted for violating rules.</p>
      </div>
    );
  }
  
  export default NotFound;
  