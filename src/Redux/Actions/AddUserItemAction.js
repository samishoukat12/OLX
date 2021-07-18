import { SettingsInputSvideo } from "@material-ui/icons";
import { db, storage, auth } from "../../Config/Firebase";
import { ADD_USER_ITEM } from "../Types/Types";

export const AddUserItemAction = (FileName, setLoading, productData, file, setUrl, Url, setFile, setImage, image, Cities, Category, Loading, Price, ProductsData, Title, Description) => async (dispatch) => {
  try {
    const ref = await storage.ref(`/images/${FileName}`);
    console.log("actiooon");
    const uploadTask = ref.put(file);
    setLoading(true)
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL().
        then((url) => {
          setLoading(false)
          db.collection("CardsAds").add({ ...productData, image: url });
          // notify();
          // push();
        })

    });
  } catch (error) {
    alert(JSON.stringify(error))
  }
}
export const UpdateProductDataWithoutImageFile = (productData, docId, push, notify, setPostLoading, file) => async (dispatch) => {
  try {
    setPostLoading(true)
    await db.collection("products").doc(docId).update(productData);
    notify();
    push();
  }
  catch (error) {
    console.log(error.message);
  }
  finally {
    setPostLoading(false)
  }
}
export const getUserId = (setUid) => async (dispatch) => {
  try {
    const user = await auth.currentUser;
    if (user) {
      var uid = user.uid;
      setUid(uid)
    }
  } catch (error) {
    console.log(error);
  }
}
export const getUid = (setUserId) => async (dispatch) => {
  try {
    const user = await auth.currentUser;
    if (user) {
      const uid = user.uid;
      setUserId(uid)
    }
  } catch (error) {
    console.log(error);
  }
}