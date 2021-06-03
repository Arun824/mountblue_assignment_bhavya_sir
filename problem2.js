// Using callbacks and the fs module's asynchronous functions, do the following:
//         1. Read the given file lipsum.txt
//         2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
//         3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
//         4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
//         5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

const fs = require('fs');

function problem2(filePath) {

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            return
        } else {
            const uppercaseData = data.toUpperCase();
            // const dataUpperCaseFile = 'dataUpperCase.txt';
            fs.writeFile('upperCaseFile.txt', uppercaseData, (err) => {
                if (err) {
                    console.error(err)
                    return
                } else {
                    fs.appendFile('filenames.txt', 'upperCaseFile.txt\n', (err) => {
                        if (err) {
                            console.error(err)
                            return;
                        } else {
                            fs.readFile('upperCaseFile.txt', 'utf-8', (error, data) => {
                                if (err) {
                                    console.error(err)
                                    return
                                } else {
                                    const lowerCaseInSplitSentenceFile = data.toLowerCase().split('. ').join('\n');

                                    fs.writeFile('lowerCaseInSplitSentenceFile.txt', lowerCaseInSplitSentenceFile, (error) => {
                                        if (err) {
                                            onsole.error(err)
                                            return
                                        } else {

                                            fs.appendFile('filenames.txt', 'lowerCaseInSplitSentenceFile.txt\n', (err) => {
                                                if (err) {
                                                    console.error(err)
                                                    return;
                                                } else {

                                                    fs.readFile('lowerCaseInSplitSentenceFile.txt', 'utf-8', (error, data) => {
                                                        if (err) {
                                                            console.error(err)
                                                            return
                                                        } else {
                                                            const sortedData = data.split('\n').sort((a, b) => {
                                                                if (a < b) {
                                                                    return -1;
                                                                }
                                                                if (a > b) {
                                                                    return 1;
                                                                }
                                                                return 0;
                                                            }).join('\n');

                                                            fs.writeFile('sortedDataFile.txt', sortedData, (error) => {
                                                                if (err) {
                                                                    console.error(err)
                                                                    return
                                                                } else {

                                                                    fs.appendFile('filenames.txt', 'sortedDataFile.txt', (err) => {
                                                                        if (err) {
                                                                            console.error(err)
                                                                            return;
                                                                        } else {
                                                                            fs.readFile('filenames.txt', 'utf8', (err, data) => {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                } else {
                                                                                    const filenamesData = data.split('\n');
                                                                                    filenamesData.forEach((file) => {
                                                                                        fs.unlink(file, (error) => {
                                                                                            if (err) {
                                                                                                console.log(err)
                                                                                                return;
                                                                                            } else {
                                                                                                console.log(`${file} removed`);
                                                                                            }
                                                                                        })
                                                                                    })

                                                                                }
                                                                            })
                                                                        }
                                                                    })

                                                                }
                                                            })
                                                        }
                                                    })

                                                }
                                            })

                                        }
                                    })
                                }
                            })

                        }
                    })

                }
            })
        }
    })

}


module.exports = problem2;