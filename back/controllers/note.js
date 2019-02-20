const Note = require('../models/note');
module.exports = {
    
    //create and save notes
    create: (req, res) => {
        // console.log(req.decoded)
        if (!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        const note = new Note({
            userId: req.decoded.user._id,
            title: req.body.title || "Untitled Note",
            content: req.body.content
        });
        
        // Save Note in the database
        note.save()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Note."
                });
            });
    },
    
    // retreve all notes
    findAll: (req, res) => {
        const otherUse = req.decoded.user._id
        let find ={
          userId: {
           $eq: otherUse
          }
        }
        Note.find(find)

            .then(notes => {
                res.send(notes);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            });
    },

    //find note by id
    // findOne: (req, res) => {
    //     const newUse = req.decoded.user._id
    //     let findById ={
    //       userId: {
    //        $eq: newUse
    //       }
    //     }
    //     Note.findById(req.params.noteId)
    //         .then(note => {
    //             if (!note) {
    //                 return res.status(404).send({
    //                     message: "Note not found with id " + req.params.noteId
    //                 });
    //             }
    //             res.send(note);
    //         }).catch(err => {
    //             if (err.kind === 'ObjectId') {
    //                 return res.status(404).send({
    //                     message: "Note not found with id " + req.params.noteId
    //                 });
    //             }
    //             return res.status(500).send({
    //                 message: "Error retrieving note with id " + req.params.noteId
    //             });
    //         });
    // },

    //update notes 
    update: (req, res) => {
        // Validate Request
        if (!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }

        // Find note and update it with the request body
        Note.findByIdAndUpdate(req.params.noteId, {
                title: req.body.title || "Untitled Note",
                content: req.body.content
            }, {
                new: true
            })
            .then(note => {
                if (!note) {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                }
                res.send(note);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                }
                return res.status(500).send({
                    message: "Error updating note with id " + req.params.noteId
                });
            });
    },

    //delete notes

    deleteOne: (req,res)=>{
        Note.findByIdAndRemove(req.params.id)
          .then(notes =>{
            if(!notes){
              return res.status(400).send({
                
                _id: "notes not found with id " + req.params.id
            });
        }else{
        res.json({
            _id: notes._id
            // , token
        });
      }
      }).catch(err => {
        throw new Error(err)
      });
      
            }
      }
//     delete: (req, res) => {
//         Note.findByIdAndRemove(req.params.noteId)
//             .then(note => {
//                 if (!note) {
//                     return res.status(404).send({
//                         message: "Note not found with id " + req.params.noteId
//                     });
//                 }
//                 res.send({
//                     message: "Note deleted successfully!"
//                 });
//             }).catch(err => {
//                 if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//                     return res.status(404).send({
//                         message: "Note not found with id " + req.params.noteId
//                     });
//                 }
//                 return res.status(500).send({
//                     message: "Could not delete note with id " + req.params.noteId
//                 });
//             });
//     },
    

// }