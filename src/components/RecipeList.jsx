import { useContext } from "react";
import { DataContext } from "../context/DataContext";
export default function RecipeList() {
  const { recipes } = useContext(DataContext);
  recipes && console.log(recipes);
  const style = {
    background: `url("https://edamam-product-images.s3.amazonaws.com/web-img/58a/58a93a8d0c48110ac1c59e3b6e82a9ef.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCICqGmzG%2FB47H2igqunicV0lrR%2BprYMAnjte%2FbBNtyytdAiEAtljKZlQCW5L%2Fi8mstF3EJC7ok2p%2B%2BiEulHr2nZoCoJ4qwgUI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDMbXOqfGaM30OLAuVSqWBW%2B5M3JiHMCdZRXHv6FgJ4lZpip7Xto%2BGcfEDnazqZ76alOftZ7TdRiHU4OPMyZZcHJQYOel4VKtFCJ8DY8Fj4I3kZQYd6SH3exmRZEoti%2BHRMP8g8zBwTWlQX8bZ4R8ctn2BEkRYM%2BXqPitwzU3HSfK5RQ1H%2B0D5%2FDijDaB3OUvQLuqSwjBSEHvSDgUrZiAUM%2FT1IHbSA6BuCMYPYIAiAyMyozjWV8SvA7%2FFEZ15IKWqAVf12yuSUAa%2FX6PziX6bqHsdWEss0D1AgLo4x4l39Im4VEzfpU%2BrZLWcu0w265zzaSC21EInObgrRX45JMBJTO3z45ExTUkY03ZzJRtgnwT3p8ApJLhbp3%2FyR50IEVj0dt2SR7h1SWjobDYbFliF11M7rDJDXjiJyhiZ9LIBNWVSRN6j3odtpRJG4BwGp2d5CkjPtFl%2FgKfvyLt%2FNpuY4GxD6I8cVteFrI8V6iCUYHgcL3GBy%2BobwZL8clucy9pyMslcjMQIjphTixAKNEoLq%2BauTdEfAlo6p6gHihaPGvz80h%2FEqhFNGeUg3yu0WX3lQOuSX8dhSNPM8G2%2FKlqpQJ3HWYnKvdTpSALw8m0hzWIvCWnY7nHsCnibuCqv3eAf6DV2KtU4cHKIJTSPjmoT%2BadpJV6pXvkwYoXiz%2FDvNoLjTSlYcPOgRpPfoEIBjde41vE7J6UVXnv0zIpuBzfiJ%2FF%2BA8N3ewvjf8Vf0X6RXNFPiEFm2GiTY%2B1ST3iJFrYKMmpOWnVD4BhvlbX%2FwBOFfDp3EJYYs1%2BxOktTYxUgp6nJeIMAUd0GhJQ%2BpXDsu7sNng5%2BWCaN3ViyvBUvcbVTZQf7Lv1yvG94y5%2BCZxIdJS2kguOBzoDbgnCx1S4SH%2Ffjg9BIFPZMKPryqIGOrEBqEvb6f8G3MZk5YOqyz6yDJSQEUxbjqaU%2FtS%2BDT76tAFKLBpXNuzENdriBwVsEVJnPLx1Wa6WXAguX9fRJpGGqN9zRTU1V6FO7oz3Uvq1SInMHCbsNT4ao0C5MTEoHw6LbNKfoqhDj9Lc2ACaY01bpYTOa7S3WEedtQvY%2BpneSXuKr0WbCfc7d%2FJsi%2BhXNX9mPrXa%2Fd10b8nGr%2FafycYjt4R0jJMxBlxqwAGUj3GmRQjD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230503T204039Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLNNAW4Y3%2F20230503%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6a78ac4ff59085c52dce83cb6874a7591213d9fd97f11103bf905d78420a78a3")`,
    backgroundSize: "cover",
    backgroundRepeat: "no - repeat",
    backgroundPosition: " center",
    borderRadius: "0px 45px 0px 45px",
  };

  return (
    <div className="recipeList_container">
      <div className="one_recipe">
        <div style={style} className="recipeList_img"></div>

        <div className="info_recipe">
          <h4>recipe name</h4>
          <p>recipe paragaph</p>
        </div>
      </div>
    </div>
  );
}
