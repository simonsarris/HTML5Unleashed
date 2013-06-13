// Listing 10.8: Writing to a File with the FileSystem API

// take care of prefixes, right now it is only implemented in
// Chrome and only with a webkit prefix
window.requestFileSystem  = window.requestFileSystem ||
                            window.webkitRequestFileSystem;

// 2*1024*1024 = 2MB of storage
window.requestFileSystem(window.TEMPORARY, 2*1024*1024, success, error);

function success(filesystem) {
  // The create option creates a file if it was not previously there
  // The only other option is "exclusive"
  // and when set to true will cause getFile to fail if the file already exists
  filesystem.root.getFile('newFile.txt', { create: true }, fileSuccess);

  function fileSuccess(fileEntry) {
    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(entrySuccess);

    function entrySuccess(fileWriter) {

      // The FileWriter object has a large number of callbacks not seen here
      // In addition to onwriteend there's also:
      // fileWriter.onerror, onabort, onprogress, onwrite, and onwritestart
      fileWriter.onwriteend = function(e) {
        console.log('Finished writing!');
      };

      // A Blob represents an object of immutable data
      var blob = new Blob(['Some text for our new file'], {type: 'text/plain'});

      fileWriter.write(blob);

    } // end entrySuccess
  } // end fileSuccess
} // end success

function error(event) {
  // outputs a number between 1 and 11 corresponding to a constant
  // You can find the constant names by looking at the FileError object
  // i.e., FileError.SECURITY_ERR (2), FileError.QUOTA_EXCEEDED_ERR (10)
  // These are considered likely to change in the future
  console.log(event.code);
}
