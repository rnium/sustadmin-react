import shutil
import os
from pathlib import Path

def copy_folder(source_folder, destination_folder):
    try:
        if os.path.exists(destination_folder):
            shutil.rmtree(destination_folder)
        shutil.copytree(source_folder, destination_folder)
        print(f"Folder '{source_folder}' successfully copied to '{destination_folder}'.")
    except shutil.Error as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")



source_path = Path().cwd()/'build'
destination_path = Path("C:\\Users\\Rony\\Desktop\local\\django projects\\sec_res_administration\\SecRDB\\frontend\\sustadmin\\build")
copy_folder(source_path, destination_path)