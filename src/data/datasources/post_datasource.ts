import PostCreateModel from "../models/post_create_model";
import apiUrls from "./api";

export default class PostDatasource {
  public async create(post: PostCreateModel) {
    try {
      const fetchData = await fetch(
        apiUrls.postCreate,
        {
          method: "POST",
          body: JSON.stringify({
            text: post.text,
            color: post.color,
            username: post.username
          })
        });

      const json = await fetchData.json();

      if (json['create'] == true) {
        console.log('create')
        return true;
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }

  public async getAllPosts() {
    try {
      const fetchData = await fetch(
        apiUrls.getAllPosts,
      );

      const json = await fetchData.json();

      if (json['get'] == true) {
        console.log('get')
        return json['posts'];
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }

  public async getUserPosts(username: string) {
    try {
      const fetchData = await fetch(
        apiUrls.getUserPosts, {
        method: "POST",
        body: JSON.stringify({
          username: username
        })
      });

      const json = await fetchData.json();

      if (json['get'] == true) {
        console.log('get')
        return json['posts'];
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }

  public async favorite(id: number) {
    try {
      const fetchData = await fetch(
        apiUrls.favorite, {
        method: "PUT",
        body: JSON.stringify({
          id: id
        })
      });

      const json = await fetchData.json();

      if (json['favorite'] == true) {
        console.log('favorite')
        return true;
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }

  public async unfavorite(id: number) {
    try {
      const fetchData = await fetch(
        apiUrls.unfavorite, {
        method: "PUT",
        body: JSON.stringify({
          id: id
        })
      });

      const json = await fetchData.json();

      if (json['unfavorite'] == true) {
        console.log('unfavorite')
        return true;
      } else {
        return false;
      }
    } catch (exc) {
      return false;
    }
  }
}