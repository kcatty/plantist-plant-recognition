import os
import numpy as np
import shutil


def divide_data_train_val():
    rootdir= 'C:/Users/bieli_pc4qr7s/Documents/Code Parada.js/plantist/plantist/data/'

    classes = ["Ulmus carpinifolia", "Acer", "Salix aurita", "Quercus", "Alnus incana", "Betula pubescens", "Salix alba 'Sericea",
               "Populus tremula", "Ulmus glabra", "Sorbus aucuparia", "Salix sinerea", "Populus", "Tilia", "Sorbus intermedia", "Fagus silvatica"]

    for i in classes:

        os.makedirs(rootdir +'/train/' + i)
        os.makedirs(rootdir +'/val/' + i)
        source = rootdir + '/' + i

        allFileNames = os.listdir(source)

        np.random.shuffle(allFileNames)

        test_ratio = 0.2

        train_FileNames, test_FileNames = np.split(np.array(allFileNames),
                                                   [int(len(allFileNames) * (1 - test_ratio))])

        train_FileNames = [source+'/'+ name for name in train_FileNames.tolist()]
        test_FileNames = [source+'/' + name for name in test_FileNames.tolist()]

        for name in train_FileNames:
            shutil.copy(name, rootdir +'/train/' + i)

        for name in test_FileNames:
            shutil.copy(name, rootdir +'/val/' + i)

divide_data_train_val()