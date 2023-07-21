const gettAll = async (req , res )=>{
    await mysqlConnection.query("SELECT * FROM crud", (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      });
}

const getUser  = async (req , res)=>{
    await mysqlConnection.query(
        "SELECT * FROM CRUD WHERE user_id = ?",
        [req.params.id],
        (err, rows, fields) => {
          if (!err) res.send(rows);
          else console.log(err);
        }
      );
}


const AddUser  = async (req , res)=>{
     let learner = req.body;
    let sql =
      "SET @user_id = ?;SET @user_name = ?;SET @user_email = ?;SET @course_Id = ?;  CALL CRUDAddOrEdit(@user_id,@user_name,@user_email,@course_Id);";
      await mysqlConnection.query(
      sql,
      [learner.user_id, learner.user_name, learner.user_email, learner.course_id],
      (err, rows, fields) => {
        if (!err)
          rows.forEach((element) => {
            if (element.constructor == Array)
              res.send("New Learner ID : " + element[0].user_id);
          });
        else console.log(err);
      }
    );
}
const updateUser = async (req , res)=>{
    let learner = req.body;
    var sql =
      "SET @user_id = ?;SET @user_name = ?;SET @user_name = ?;SET @course_Id = ?; CALL CRUDAddOrEdit(@user_id,@user_name,@user_email,@course_Id);";
  await  mysqlConnection.query(
      sql,
      [
        learner.learner_id,
        learner.learner_name,
        learner.learner_email,
        learner.course_Id,
      ],
      (err, rows, fields) => {
        if (!err) res.send("Learner Details Updated Successfully");
        else console.log(err);
      }
    );
}

const deleteUser = async (req, res)=>{
    await mysqlConnection.query(
        "DELETE FROM CRUD WHERE user_id = ?",
        [req.params.id],
        (err, rows, fields) => {
          if (!err) res.send("Learner Record deleted successfully.");
          else console.log(err);
        }
      );
}

module.exports = { deleteUser , updateUser , AddUser , getUser , gettAll };