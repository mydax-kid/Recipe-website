function AddComment() {
  return(
    <div className= 'min-h-[300px] bg-white p-2 md:p-8 lg:p-12 md:mb-12' id= 'comment'>
        <h1 className= 'text-2xl font-medium'>Leave a reply</h1>
        <div className= 'p-2 md:p-6 w-full bg-teal-100 mt-6 rounded-sm lg:w-max'>
          <textarea 
            rows= '3' 
            cols= '80' 
            placeholder="Enter your comment here"
            className= 'p-4 w-full'
          />
        </div>
        <p className= 'py-4 mt-16 border-t'>Mydax Chef @ 2023</p>
      </div>
  )
}

export default AddComment;