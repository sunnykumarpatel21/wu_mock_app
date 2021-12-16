
import type { NextPage } from "next";
import classNames from 'classnames';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Dashboard: NextPage = () => {
    return (
        <>
            <div className={styles.landingPage}>
				<div className={styles.cardItem}>
					<h2>Hi Lonar</h2>
					<div className="row m-0">
						<div className="col-md-3">
							<div className={classNames(styles.cardItem, styles.innerCard)}>
								<p>Dashboard</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className={classNames(styles.cardItem, styles.innerCard)}>
								<Link href={'/my_accounts'}><a>My Accounts</a></Link>
						</div>
						</div>
						<div className="col-md-3">
							<div className={classNames(styles.cardItem, styles.innerCard)}>
              <Link href={'/reports'}><a>Reports</a></Link>
							</div>
						</div>
						<div className="col-md-3">
							<div className={classNames(styles.cardItem, styles.innerCard)}>
								<p>Knowledge Center</p>
							</div>
						</div>
						<div className="col-md-3">
							<div className={classNames(styles.cardItem, styles.innerCard)}>
								<p>Community Forum</p>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    );
};

export default Dashboard;
